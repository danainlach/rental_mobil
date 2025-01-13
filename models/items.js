import {
    conn,
    DataTypes
} from "./connection.js";


const Mobil = conn.define('mobil', {
    nama: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

export default Mobil;

conn.sync().then(() => {
    console.log("tabel Mobil Ok");
}).catch(err => {
    console.log("tabel Mobil Tidak ok");
});