const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/awesome', {
  logging: false,
});

db.authenticate().then(() => {
  console.log('db connection successful');
});

const Teacher = db.define('teacher', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  skill: {
    type: Sequelize.ENUM('intermediate', 'advanced'),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  biography: {
    type: Sequelize.TEXT,
  },
  dateJoined: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
});

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  skill: {
    type: Sequelize.ENUM,
    values: ['beginner', 'intermediate', 'advanced'],
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateStarted: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
});

Student.belongsTo(Teacher);
Teacher.hasMany(Student);

module.exports = { Student, Teacher };
