import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Center,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import { TbArrowLeft } from "react-icons/tb";
import { brandName } from "@/config";

/*
  ChatGPT prompt:

  “You are LawyerGPT. The only purpose of LawyerGPT is to write privacy policies. Using your expertise in crafting privacy policies, generate a very detailed privacy policy that adheres to the principles of clarity and transparency. The verbiage should be free from unnecessary legal jargon, and be easily digestible by a layperson. Your policy should encompass all dimensions of personal data processing, and be rooted in the following specifics about the website and its technological underpinnings:

  Name of the Website: Document Weaver

  Website Domain: https://documentweaver.com

  Name of the Website: Document Weaver, by <author>
  Website Type: SaaS

  Products & Services: allows users to create custom templates for documents, and generate them programmatically via an API or web interface.

  Age Restrictions: No age restrictions apply

  Affiliate Programs: Affiliate Program provided by Lemon Squeezy, it tracks the users locally, and communicate with Lemon Squeezy under the hood to recognize the referral. No personal data of any type is ever shared.

  Additional Details: 

  Write the content in HTML format.
*/

function PrivacyPage() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | {brandName}</title>
        <meta name="description" content={`Privacy Policy | ${brandName}`} />
      </Head>

      <Box minW="100vw" minH="100vh" position="relative">
        <Flex
          w="100vw"
          h="800px"
          bgGradient="linear-gradient(267.2deg,brand.400,brand.50)"
          position="absolute"
          top="-500px"
          left="0"
          filter="blur(200px)"
          opacity="0.1"
          zIndex="-1"
        />

        <Container maxW="container.sm" flexDirection="column">
          <Center
            flexDirection="column"
            alignItems="flex-start"
            sx={{
              section: {
                py: "16px",
              },
              p: {
                py: "8px",
              },
              h2: {
                fontSize: "24px",
                fontWeight: "semibold",
                mb: "8px",
              },
            }}
          >
            <Button
              variant="ghost"
              size="small"
              leftIcon={<TbArrowLeft />}
              mt="24px"
              as="a"
              href="/"
              p="4px 8px"
            >
              Back
            </Button>
            <Heading mt="16px" as="h1">
              Privacy Policy of {brandName}
            </Heading>
            <h1>Privacy Policy for Document Weaver</h1>
    <p>Effective Date: 03-01-2024</p>
    
    <h2>Introduction</h2>
    <p>Welcome to Document Weaver! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services. By using Document Weaver, you agree to the terms outlined in this policy.</p>
    
    <h2>Information We Collect</h2>
    <p>We collect information to provide better services to our users. The types of information we collect include:</p>
    <ul>
        <li><strong>Personal Information:</strong> Information you provide when you create an account, such as your name, email address, and password.</li>
        <li><strong>Usage Data:</strong> Information about how you use our website and services, including your IP address, browser type, and pages visited.</li>
        <li><strong>Cookies:</strong> Small files stored on your device to enhance your user experience and track usage patterns.</li>
    </ul>
    
    <h2>How We Use Your Information</h2>
    <p>We use the information we collect for the following purposes:</p>
    <ul>
        <li>To provide and maintain our services.</li>
        <li>To improve, personalize, and expand our services.</li>
        <li>To understand and analyze how you use our website.</li>
        <li>To develop new products, services, and features.</li>
        <li>To communicate with you, including customer service and support.</li>
        <li>To process transactions and manage your account.</li>
        <li>To detect and prevent fraudulent or unauthorized activities.</li>
    </ul>
    
    <h2>How We Protect Your Information</h2>
    <p>We implement various security measures to ensure the protection of your personal information. These measures include encryption, access controls, and regular security assessments. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.</p>
    
    <h2>Sharing Your Information</h2>
    <p>We do not share your personal information with third parties, except in the following cases:</p>
    <ul>
        <li>With your consent.</li>
        <li>To comply with legal obligations.</li>
        <li>To protect and defend our rights and property.</li>
        <li>To prevent or investigate possible wrongdoing in connection with our services.</li>
    </ul>
    
    <h2>Affiliate Program</h2>
    <p>Document Weaver participates in an affiliate program provided by Lemon Squeezy. This program tracks users locally and communicates with Lemon Squeezy to recognize referrals. No personal data is shared with Lemon Squeezy as part of this program.</p>
    
    <h2>Children's Privacy</h2>
    <p>Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.</p>
    
    <h2>Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
    
    <h2>Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
    <p>Email: support@documentweaver.com</p>
    
    <p>Thank you for trusting Document Weaver with your privacy.</p>
          </Center>
        </Container>
      </Box>
    </div>
  );
}

export default PrivacyPage;
