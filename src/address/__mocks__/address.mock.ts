import { cityMock } from "../../city/__mocks__/city.mock";
import { AddressEntity } from "../entities/address.entity";
import { userEntityMock } from "../../user/__mocks__/user.mock";

export const addressMock: AddressEntity = {
    cep: '3231232113',
    cityId: cityMock.id,
    complement: 'casa',
    createdAt: new Date(),
    id: 3232,
    numberAddress: 3212,
    updatedAt: new Date(),
    userId: userEntityMock.id
}