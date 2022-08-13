import { Test } from '@nestjs/testing';
import { UserStatus } from '../auth/user-status.enum';
import { ItemRepository } from './item.repository';
import { ItemsService } from './items.service';

const mockItemRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
});

const mockUser1 = {
  id: '1',
  username: 'test1',
  password: 'test1234',
  status: UserStatus.PREMIUM,
};

const mockUser2 = {
  id: '2',
  username: 'test2',
  password: 'test1234',
  status: UserStatus.PREMIUM,
};

describe('ItemsServiceTest', () => {
  let itemsService;
  let itemsRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: ItemRepository,
          useFactory: mockItemRepository,
        },
      ],
    }).compile();
    itemsService = module.get<ItemsService>(ItemsService);
    itemsRepository = module.get<ItemRepository>(ItemRepository);
  });

  describe('findAll', () => {
    it('common case', async () => {
      const expected = [];
      itemsRepository.find.mockResolvedValue(expected);
      const result = await itemsService.findAll();
      expect(result).toEqual(expected);
    });
  });

  describe('findById', () => {
    it('common case', () => {
      const expected = {
        
      }
    })
  })
});
