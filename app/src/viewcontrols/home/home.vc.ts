import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context = {
        friends: [
            {
                name: 'Tyler',
                age: 26,
                title: 'Software Developer'
            },
            {
                name: 'Hillary',
                age: 26,
                title: 'Software Developer'
            },
            {
                name: 'Haley',
                age: 26,
                title: 'Depot/U Principal'
            },
            {
                name: 'Matt',
                age: 38,
                title: 'Depot/U CEO'
            }
        ]
    };
}

register.viewControl('home-vc', HomeViewControl);
