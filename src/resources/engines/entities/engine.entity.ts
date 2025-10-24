import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'Engines',
    timestamps: false
})
export class Engine extends Model {

    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: false,
        primaryKey: true
    })
    declare idEngine: string;

    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: false,
    })
    declare engineType: string;
}
