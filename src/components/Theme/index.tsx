import React, {FunctionComponent} from 'react';
import {NavLink, useRouteMatch} from 'react-router-dom';
import {Params} from '../Algorithms';
import {Theme, ThemeKeys} from '../Theme';
import {List, ListItem} from './styles';
import {linker} from '../..';

const ThemeBar: FunctionComponent<Theme> = (theme) => {
    const {params} = useRouteMatch<Params>();
    return <div>
        <List {...theme}>{
            ThemeKeys.map((themeKey, key) =>
                <ListItem {...theme} key={key}>
                    <NavLink key={key} to={
                        linker({...params, themeKey})}>{themeKey}</NavLink>
                </ListItem>
            )
        }</List>
    </div>;
};

export default ThemeBar;

export * from './functions';
