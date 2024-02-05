import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../user/user.service';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { JwtService } from '@nestjs/jwt';
import { jwtMock } from '../__mocks__/jwt.mocks';
import { loginUserMock } from '../__mocks__/login-user.mock';
import { ReturnUserDto } from '../../user/dtos/returnUser.dto';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: () => jwtMock,
          },
        },
        {
          provide: UserService,
          useValue: {
            findUserByEmail: jest.fn().mockResolvedValue(userEntityMock)
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should return user if password and email valid', async () => {
    const user = await service.login(loginUserMock);

    expect(user).toEqual({
      accessToken: jwtMock,
      user: new ReturnUserDto(userEntityMock)
    });
  });

  it('should return user if password inavalid and email valid', async () => {
    expect(
      service.login({ ...loginUserMock, password: 'abc' })
    ).rejects.toThrowError();
  });

  it('should return error in UserSerive', async () => {
    jest.spyOn(userService, 'findUserByEmail').mockRejectedValue(new Error());
    expect(service.login(loginUserMock)).rejects.toThrow();
  });
});