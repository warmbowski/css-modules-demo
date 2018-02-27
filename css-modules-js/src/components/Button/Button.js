/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Button.less';

export default class Button extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
        ]),
        href: PropTypes.string,
        size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
        btnType: PropTypes.string,
        ignoreResponsive: PropTypes.bool
    };

    static defaultProps = {
        children: '',
        className: '',
        disabled: false,
        icon: null,
        href: '',
        size: 'md',
        btnType: '',
        ignoreResponsive: false
    };

    handleClassName = () => {
        const { className, disabled, ignoreResponsive } = this.props;
        const defaultClass = styles.default;
        const sizeClass = styles[`${this.props.size}`] || '';
        const typeClass = this.handleType();
        const main = ` ${typeClass} ${sizeClass} ${disabled ? styles.disabled : ''}`;
        // if ignoreResponsive is true, don't add 100% width class
        const responsiveCheck = ` ${main} ${ignoreResponsive ? '' : styles.responsive}`;
        const trimMain = responsiveCheck.replace(/\s{2,}/g, ' '); // If type is empty remove the extra empty whitespace. Keep the class clean.
        const buildClass = className ? `${trimMain} ${className}` : `${trimMain}`;

        return defaultClass.concat(buildClass);
    };

    handleErrors = function handleErrors(msg) {
        return console.error(`Component Library Error: Button component ${msg}`);
    };

    handleType = () => {
        const { btnType } = this.props;
        const isMore = btnType.split(' ');
        const errorMsg = {
            multiType: 'prop "btnType", cannot have more than one string.'
        };

        if (isMore.length > 1) {
            this.handleErrors(errorMsg.multiType);
        }

        return styles[`${btnType}`] || '';
    };

    handleIcon = child => (
        <div className={styles.wrapper}>
            <span className={styles.icon}>{this.props.icon}</span>
            {child}
        </div>
    )

    render() {
        const {
            href,
            ignoreResponsive,
            btnType,
            children,
            icon,
            ...rest
        } = this.props;
        const HTMLTag = href ? 'a' : 'button';

        return (
            <HTMLTag {...rest} className={this.handleClassName()}>
                {icon && this.handleIcon(children)}
                {!icon && children}
            </HTMLTag>
        );
    }
}