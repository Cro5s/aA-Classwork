# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#To destroy database as it stands
Cat.destroy_all

Cat.create(birth_date: '2000/02/03', name: 'Connor', sex: 'M', description: 'Hes old but cute', color: 'gray')
Cat.create(birth_date: '2001/02/03', name: 'Connie', sex: 'M', description: 'Hes old but cute', color: 'gray')
Cat.create(birth_date: '2012/02/03', name: 'Sara', sex: 'M', description: 'Hes old but cute', color: 'brown')
Cat.create(birth_date: '2013/02/03', name: 'Chris', sex: 'M', description: 'Hes old but cute', color: 'white')
Cat.create(birth_date: '2004/02/03', name: 'Pepper', sex: 'F', description: 'Hes old but cute', color: 'gray')
