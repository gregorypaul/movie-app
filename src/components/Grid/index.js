import { Wrapper, Content } from './Grid.Style';

const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
)

export default Grid;