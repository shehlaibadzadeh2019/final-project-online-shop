import React from 'react'
import './Homepage.sass'
import {Carousell} from './index'
import {Popular} from './popularMap'

export const Homepage = props => {
    return (
        <div>
            <Carousell />
            <div className = "popular">
                <div className = "container">
                <div className = "popular-products row justify-content-between">
                    <div className = "popular-products-items col-lg-12 col-md-12 col-12">
                        <h3 className = "popular-header">Popular Products</h3>
                        <div className = "popular-images grid-container">
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://static.bershka.net/4/photos2/2020/V/1/2/p/2300/560/202/2300560202_2_4_3.jpg?t=1574937433018"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Bershka</h4>
                                <h6 className = "popular-images-item-price">$ 50</h6>
                            </a>
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67020575_02_D3.jpg?ts=1574679853580&imwidth=256&imdensity=2"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Mango</h4>
                                <h6 className = "popular-images-item-price">$ 150</h6>
                            </a>
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hrtlnujg8kucuftzmbnr/court-borough-mid-2-little-kids-boot-2BPfpM.jpg"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Nike</h4>
                                <h6 className = "popular-images-item-price">$ 100</h6>
                            </a>
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://static.bershka.net/4/photos2/2020/V/1/1/p/1310/560/102/1310560102_1_1_3.jpg?t=1574939064040"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Bershka</h4>
                                <h6 className = "popular-images-item-price">$ 50</h6>
                            </a>
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://static.bershka.net/4/photos2/2020/V/1/2/p/7916/132/040/7916132040_1_1_3.jpg?t=1574937510767"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Bershka</h4>
                                <h6 className = "popular-images-item-price">$ 50</h6>
                            </a>
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://static.bershka.net/4/photos2/2020/V/1/2/p/2300/560/202/2300560202_1_1_3.jpg?t=1574937433018"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Bershka</h4>
                                <h6 className = "popular-images-item-price">$ 50</h6>
                            </a>
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/yfxzpiwmeyegnmkxjkch/air-max-plus-3-big-kids-shoe-8TBNCv.jpg"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Nike</h4>
                                <h6 className = "popular-images-item-price">$ 100</h6>
                            </a>
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53061051_01_D6.jpg?ts=1565166788672&imwidth=342&imdensity=2"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Mango</h4>
                                <h6 className = "popular-images-item-price">$ 150</h6>
                            </a>
                            <a href = "" className = "popular-image-item-a grid-item">
                                <img src="https://static.bershka.net/4/photos2/2019/I/1/2/p/7152/132/040/7152132040_1_1_3.jpg?t=1574937523355"
                                alt="" className = "popular-images-item-img" />
                                <h4 className = "popular-images-item-name">Bershka</h4>
                                <h6 className = "popular-images-item-price">$ 50</h6>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
};