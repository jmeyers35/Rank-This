var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

var userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    charts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Chart'}]
});

userSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

userSchema.methods.toGetJSON = function() {
    return {
        id: this._id,
        username: this.username,
        charts: this.charts
    };
};

module.exports = mongoose.model('User', userSchema)