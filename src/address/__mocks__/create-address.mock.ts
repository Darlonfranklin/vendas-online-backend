import { cityMock } from "../../city/__mocks__/city.mock";
import { CreateAddressDto } from "../dtos/createAddress.dto";
import { addressMock } from "./address.mock";

export const createAddressMock: CreateAddressDto = {
    cep: addressMock.cep,
    complement: addressMock.complement,
    cityId: cityMock.id,
    numberAddress: addressMock.numberAddress
}