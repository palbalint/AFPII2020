const faker = require('faker');

generateUser = () => {
	return{
		user:faker.name.fisrtName(),
		password:faker.internet.password(),
		email:faker.internet.email(),
		firstname:faker.name.fistName(),
		lastname:faker.name.lastName(),
		createdat:faker.date.recent().toISOString()
	}
};

var users = [];
const UserCount=100;
for (i= 0; i < UserCount; i++){
	Users[i] = generateUser();
	Users[i]['id']=i;
}
console.log(Users)