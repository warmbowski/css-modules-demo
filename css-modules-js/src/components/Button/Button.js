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
        size: PropTypes.string,
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
        const defaultClassName = 'os-btn-cl';
        const size = `btn-cl-${this.props.size}`;
        const type = this.handleType();
        const main = disabled ? ` ${type} ${size} btn-cl-disabled` : ` ${type} ${size}`;
        // if ignoreResponsive is true, don't add 100% width class
        const responsiveCheck = ignoreResponsive ? ` ${main}` : ` ${main} btn-cl-is-responsive`;
        const trimMain = responsiveCheck.replace(/\s{2,}/g, ' '); // If type is empty remove the extra empty whitespace. Keep the class clean.
        const buildClass = className ? `${trimMain} ${className}` : `${trimMain}`;

        return defaultClassName.concat(buildClass);
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

        return !btnType ? btnType : `btn-cl-${btnType}`;
    };

    handleIcon = child => (
        <div className="os-btn-icon-wrapper">
            <span className="os-btn-icon">{this.props.icon}</span>
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