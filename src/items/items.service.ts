import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "3294303234",
            name: "Item1",
            qty: 100,
            description: 'This is item1'
        },
        {
            id: "3222203234",
            name: "Item2",
            qty: 10,
            description: 'This is item2'
        }
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    }
}
