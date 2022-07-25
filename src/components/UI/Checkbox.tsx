import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    box-sizing: border-box;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: ${props => (props.checked ? '#4A67FF' : '#FFFFFF')};
    border-radius: 4px;
    border: 1px solid #000000;
    font-family: 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
`

const CheckboxLogin = ({
    className,
    checked,
    onChange,
    ...props
}: {
    className?: string
    checked: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    props?: any[]
}) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
        <StyledCheckbox checked={checked}>
        </StyledCheckbox>
    </CheckboxContainer>
)

export class Checkbox extends React.Component {
    state = { checked: false }

    handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ checked: event.target.checked })
    }

    render() {
        return (
            <div style={{ fontFamily: 'system-ui' }}>
            <label>
                <CheckboxLogin
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
                />
                <span style={{ marginLeft: 17 }}>Запомнить меня</span>
            </label>
            </div>
        )
    }
}