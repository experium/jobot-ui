import React from 'react';
import iconPaths from '../data/icon';

function getPath(iconName) {
    const icon = iconPaths.icons.find(icon => icon.tags.indexOf(iconName) >= 0);

    if (icon) {
        return icon.paths.join(' ');
    } else {
        console.warn(`icon ${iconName} does not exist.`);
        return '';
    }
}

export const Icon = p => (
    <svg height={(p.size) + "px"} fill={p.color} viewBox="0 0 1024 1024">
        <path d={getPath(p.icon)}></path>
    </svg>
);


Icon.defaultProps = {
    size: '22',
    color: '#000',
};
