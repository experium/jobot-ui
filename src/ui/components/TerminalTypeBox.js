import { styled, Box} from "@smooth-ui/core-sc";

export const TypeBox = styled(Box)`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: -1px;
    flexWrap: wrap;
`;

TypeBox.defaultProps = {
    p: 10,
    border: "1px solid #8c97b2"
};
