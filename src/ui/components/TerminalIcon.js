import { styled, Box, th} from "@smooth-ui/core-sc";

export const TypeIcon = styled(Box)`
    margin: 5px auto;
    box-sizing: border-box;
    color: ${th('primary')};
`;

TypeIcon.defaultProps = {
    width: "3rem"
};
