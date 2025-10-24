import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'Colors',
    timestamps: false
})
export class Color extends Model {

    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: false,
        primaryKey: true
    })
    declare idColor: string;

    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: false
    })
    declare name: string;

    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: false
    })
    declare hexCode: string;
}
