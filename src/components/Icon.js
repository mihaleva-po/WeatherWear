import {View} from "react-native";

import Boots from '../../assets/img/clothes/svg/boots.svg';
import BootsVesna from '../../assets/img/clothes/svg/boots3.svg';
import Top from '../../assets/img/clothes/svg/top.svg';
import TShirt from '../../assets/img/clothes/svg/T-shirt.svg';
import Umbrella from '../../assets/img/clothes/svg/umbrella.svg';
import Windbreaker from '../../assets/img/clothes/svg/windbreaker.svg';
import Turtleneck from '../../assets/img/clothes/svg/turtleneck.svg';
import Sneakers2 from '../../assets/img/clothes/svg/sneakers (2).svg';
import Keds from '../../assets/img/clothes/svg/keds.svg';
import FlipFlops from '../../assets/img/clothes/svg/flipFlops.svg';
import Sunglasses from '../../assets/img/clothes/svg/sunglasses.svg';
import Gloves from '../../assets/img/clothes/svg/gloves.svg';
import Mittens from '../../assets/img/clothes/svg/mittens.svg';
import Hat from '../../assets/img/clothes/svg/hat.svg';
import Scarf from '../../assets/img/clothes/svg/scarf.svg';
import Cap from '../../assets/img/clothes/svg/cap.svg';
import Shorts from '../../assets/img/clothes/svg/shorts.svg';
import Skirt from '../../assets/img/clothes/svg/skirt.svg';
import Jeans from '../../assets/img/clothes/svg/jeans.svg';
import ThermalPants from '../../assets/img/clothes/svg/thermalPants.svg';
import DenimJacket from '../../assets/img/clothes/svg/denimJacket.svg';
import Coat from '../../assets/img/clothes/svg/coat.svg';
import Jacket from '../../assets/img/clothes/svg/jacket.svg';
import Jacket2 from '../../assets/img/clothes/svg/jacket2.svg';
import DownJacket from '../../assets/img/clothes/svg/downJacket.svg';
import Cardigan from '../../assets/img/clothes/svg/cardigan.svg';
import Sweater from '../../assets/img/clothes/svg/sweater.svg';
import Pants from '../../assets/img/clothes/svg/pants.svg';
import Tanktop from '../../assets/img/clothes/svg/tank-top.svg';
import Furcoat from '../../assets/img/clothes/svg/furCoat.svg';
import Shoes from '../../assets/img/clothes/svg/shoes.svg';
import Hoody from '../../assets/img/clothes/svg/hoody.svg';
import BootsLong from '../../assets/img/clothes/svg/sapogi.svg';
import ShirtR from '../../assets/img/clothes/svg/shirt.svg';
import Loafers from '../../assets/img/clothes/svg/lof2.svg';
import Legging from '../../assets/img/clothes/svg/leggings.svg';
import Raincoat from '../../assets/img/clothes/svg/raincoat.svg';
import Dress from '../../assets/img/clothes/svg/dress.svg';


const Icon = ({name}) => {

    let content;

    switch (name) {
        case 'Зимние ботинки':
            content = <Boots width={70} height={70}/>
            break;

        case 'Межсезонные ботинки':
            content = <BootsVesna width={70} height={70}/>
            break;

        case 'Кроссовки':
            content = <Sneakers2 width={70} height={70}/>
            break;

        case 'Кеды':
            content = <Keds width={70} height={70}/>
            break;

        case 'Сланцы':
            content = <View style={{marginBottom: 10}}><FlipFlops width={60} height={60}/></View>
            break;

        case 'Очки':
            content = <Sunglasses width={70} height={70}/>
            break;

        case 'Зонтик':
            content = <Umbrella width={65} height={65}/>
            break;

        case 'Перчатки':
            content = <View style={{marginBottom: 10}}><Gloves width={60} height={60}/></View>
            break;

        case 'Варежки':
            content = <View style={{marginBottom: 5}}><Mittens width={65} height={65}/></View>
            break;

        case 'Шапка':
            content = <View style={{marginBottom: 5}}><Hat width={65} height={65}/></View>
            break;

        case 'Шарф':
            content = <Scarf width={70} height={70}/>
            break;

        case 'Кепка':
            content = <Cap width={70} height={70}/>
            break;

        case 'Шорты':
            content = <Shorts width={70} height={70}/>
            break;

        case 'Юбка':
            content = <View style={{marginBottom: 9}}><Skirt width={60} height={60}/></View>
            break;

        case 'Джинсы':
            content = <View style={{marginBottom: 7}}><Jeans width={65} height={65}/></View>
            break;

        case 'Термо штаны':
            content = <View style={{marginBottom: 7}}><ThermalPants width={65} height={65}/></View>
            break;

        case 'Джинсовая куртка':
            content = <View style={{marginBottom: 5}}><DenimJacket width={60} height={60}/></View>
            break;

        case 'Ветровка':
            content = <View style={{marginBottom: 7}}><Windbreaker width={65} height={65}/></View>
            break;

        case 'Пальто':
            content = <View style={{marginBottom: 7}}><Coat width={65} height={65}/></View>
            break;

        case 'Куртка':
            content = <View style={{marginBottom: 5}}><Jacket width={65} height={65}/></View>
            break;

        case 'Пуховик':
            content = <View style={{marginBottom: 5}}><DownJacket width={65} height={65}/></View>
            break;

        case 'Пиджак':
            content = <View style={{marginBottom: 5}}><Jacket2 width={65} height={65}/></View>
            break;

        case 'Кардиган':
            content = <View style={{marginBottom: 5}}><Cardigan width={65} height={65}/></View>
            break;

        case 'Топ':
            content = <View style={{marginBottom: 5}}><Top width={60} height={60}/></View>
            break;

        case 'Футболка':
            content = <View style={{marginBottom: 5}}><TShirt width={65} height={65}/></View>
            break;

        case 'Водолазка':
            content = <Turtleneck width={70} height={70}/>
            break;

        case 'Свитер':
            content = <View style={{marginBottom: 5}}><Sweater width={65} height={65}/></View>
            break;

        case 'Брюки':
            content = <View style={{marginBottom: 7}}><Pants width={65} height={65}/></View>
            break;

        case 'Майка':
            content = <View style={{marginBottom: 7}}><Tanktop width={60} height={60}/></View>
            break;

        case 'Шуба':
            content = <View style={{marginBottom: 5}}><Furcoat width={65} height={65}/></View>
            break;

        case 'Туфли':
            content = <Shoes width={70} height={70}/>
            break;

        case 'Толстовка':
            content = <View style={{marginBottom: 5}}><Hoody width={65} height={65}/></View>
            break;

        case 'Сапоги':
            content = <BootsLong width={70} height={70}/>
            break;

        case 'Рубашка':
            content = <View style={{marginBottom: 5}}><ShirtR width={65} height={65}/></View>
            break;

        case 'Лоферы':
            content = <Loafers width={70} height={70}/>
            break;

        case 'Легинсы':
            content = <Legging width={70} height={70}/>
            break;

        case 'Платье':
            content = <View style={{marginBottom: 5}}><Dress width={65} height={65}/></View>
            break;

        case 'Плащ':
            content = <View style={{marginBottom: 5}}><Raincoat width={65} height={65}/></View>
            break;

        default:
            content = null;
    }

    return (
        <View>
            {content}
        </View>
    )
}

export default Icon;

