import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
    cpf: '312321312312',
    createdAt: new Date(),
    email: 'darl88@gmail.com',
    id: 22,
    name: 'DarF',
    password: 'largePassword',
    phone: '32131231212',
    typeUser: UserType.User,
    updatedAt: new Date(),
} 