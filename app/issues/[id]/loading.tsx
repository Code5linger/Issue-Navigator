import { Skeleton } from '@radix-ui/themes';
import { Flex, Card, Box } from '@radix-ui/themes';

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex className="space-x-3 " my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem " />
      </Flex>
      <Card className="prose lg:prose-xl" mt="5">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
