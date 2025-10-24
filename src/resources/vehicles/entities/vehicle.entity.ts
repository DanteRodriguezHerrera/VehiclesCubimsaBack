import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'Vehicles',
    timestamps: false
})
export class Vehicle extends Model {
    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: false,
        primaryKey: true
    })
    declare idVehicle: string;

    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: false
    })
    declare model: string;

    @Column({
        type: DataType.STRING({ length: 4 }),
        allowNull: false
    })
    declare year: string;

    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: true
    })
    declare color: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    })
    declare cost: string;

    @Column({
        type: DataType.STRING({ length: 250 }),
        allowNull: true
    })
    declare engine: string;

    @Column({
        type: DataType.TINYINT,
        allowNull: false
    })
    declare doors: string;
}
