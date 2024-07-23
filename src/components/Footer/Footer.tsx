"use client";

import {
  Flex,
  Spacer,
  Stack,
  Text,
  Tooltip,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Section } from "../atoms/Section/Section";
import { Link } from "@chakra-ui/next-js";
import { brandName, landingPageDescription } from "@/config";
import Image from "next/image";
import { useColorModeValues } from "@/hooks/useColorModeValues";
import { Routes } from "@/data/routes";

export const Footer = () => {
  const { secondaryTextColor, borderColor } = useColorModeValues();
  return (
    <Section flexDir="column" my="80px">
      <Flex
        w="90%"
        maxW="1000px"
        flexDir="column"
        fontSize="12px"
        color={secondaryTextColor}
      >
        <Flex
          borderTop="1px solid gray"
          borderColor={borderColor}
          mt="32px"
          mb="80px"
        />

        <Flex
          mb="40px"
          alignItems="flex-start"
          flexDir={["column", "column", "row"]}
        >
          <Stack alignItems="flex-start" mr="32px">
            <Stack direction="row" alignItems="center">
              <Flex>
                <Image src="/logo.png" alt="logo" width={32} height={32} />
              </Flex>
              <Text fontWeight={700} fontSize="16px">
                {brandName}
              </Text>
            </Stack>
            <Text fontWeight={500} fontSize="14px">
              {landingPageDescription}
            </Text>
          </Stack>
          <Spacer />
          <Spacer />
          <Stack
            direction={["column", "column", "row"]}
            spacing="24px"
            alignItems="flex-start"
            mt={["16px", "16px", "0"]}
          >
            <VStack mr="8px" alignItems="flex-start">
              <Text fontWeight="bold" textTransform="uppercase">
                Legal
              </Text>
              <Link href={Routes.privacy}>Privacy Policy</Link>
              <Link href={Routes.terms}>Terms and Conditions</Link>
            </VStack>
          </Stack>
        </Flex>

        <Text fontSize="12px" color={secondaryTextColor} mb="40px">
          <br />© Copyright {new Date().getFullYear()} {brandName}. All rights
          reserved.
        </Text>
      </Flex>
    </Section>
  );
};
