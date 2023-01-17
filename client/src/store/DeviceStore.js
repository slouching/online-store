import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Refrigerator'},
            {id: 2, name: 'Smartphone'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._device = [
            {id: 1, name: 'Iphone 14 Pro', price: 2500, rating: 5, img: `https://allcell.am/wp-content/uploads/2022/09/Screenshot_3.jpg.webp`},
            {id: 2, name: 'Iphone 14 Pro', price: 2500, rating: 5, img: `https://allcell.am/wp-content/uploads/2022/09/Screenshot_3.jpg.webp`},
            {id: 3, name: 'Iphone 14 Pro', price: 2500, rating: 5, img: `https://allcell.am/wp-content/uploads/2022/09/Screenshot_3.jpg.webp`},
            {id: 4, name: 'Iphone 14 Pro', price: 2500, rating: 5, img: `https://allcell.am/wp-content/uploads/2022/09/Screenshot_3.jpg.webp`}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}