import { Container, Heading, List, ListItem, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import P from '../components/paragraph'

const Privacy = () => {
  return (
    <Layout title="Privacy Policy - Momentum">
      <Container maxW="container.md">
        <Heading as="h1" fontSize={32} mb={6}>
          Privacy Policy for Momentum
        </Heading>
        
        <P>
          <strong>Last Updated: December 10, 2025</strong>
        </P>

        <Section delay={0.1}>
          <Heading as="h2" fontSize={24} mb={4}>
            Introduction
          </Heading>
          <P>
            Welcome to Momentum (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
          </P>
        </Section>

        <Section delay={0.2}>
          <Heading as="h2" fontSize={24} mb={4}>
            Information We Collect
          </Heading>
          
          <Heading as="h3" fontSize={20} mb={3} mt={4}>
            Personal Information
          </Heading>
          <P>
            When you create an account or use Momentum, we may collect:
          </P>
          <List ml={6} my={4}>
            <ListItem>• Email address</ListItem>
            <ListItem>• Username and display name</ListItem>
            <ListItem>• Profile picture (optional)</ListItem>
            <ListItem>• Account preferences and settings</ListItem>
          </List>

          <Heading as="h3" fontSize={20} mb={3} mt={4}>
            Habit and Activity Data
          </Heading>
          <List ml={6} my={4}>
            <ListItem>• Habit names and descriptions</ListItem>
            <ListItem>• Streak counts and progress data</ListItem>
            <ListItem>• Completion timestamps</ListItem>
            <ListItem>• Streak freeze usage</ListItem>
            <ListItem>• Custom habit templates you create</ListItem>
          </List>

          <Heading as="h3" fontSize={20} mb={3} mt={4}>
            Social and Accountability Features
          </Heading>
          <List ml={6} my={4}>
            <ListItem>• Accountability partner connections</ListItem>
            <ListItem>• Leaderboard rankings and scores</ListItem>
            <ListItem>• Messages and interactions with accountability partners</ListItem>
          </List>

          <Heading as="h3" fontSize={20} mb={3} mt={4}>
            Usage Data
          </Heading>
          <List ml={6} my={4}>
            <ListItem>• App usage statistics</ListItem>
            <ListItem>• Device information (type, OS version)</ListItem>
            <ListItem>• Log data and diagnostics</ListItem>
            <ListItem>• Crash reports and performance data</ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" fontSize={24} mb={4}>
            How We Use Your Information
          </Heading>
          <P>
            We use the collected information for:
          </P>
          <List ml={6} my={4}>
            <ListItem>• Providing and maintaining the Momentum service</ListItem>
            <ListItem>• Tracking your habit streaks and progress</ListItem>
            <ListItem>• Connecting you with accountability partners</ListItem>
            <ListItem>• Generating personalized statistics and insights</ListItem>
            <ListItem>• Managing streak freezes and recovery features</ListItem>
            <ListItem>• Displaying leaderboards and competitive features</ListItem>
            <ListItem>• Improving app performance and user experience</ListItem>
            <ListItem>• Sending notifications about your habits and streaks</ListItem>
            <ListItem>• Providing customer support</ListItem>
            <ListItem>• Detecting and preventing fraud or abuse</ListItem>
          </List>
        </Section>

        <Section delay={0.4}>
          <Heading as="h2" fontSize={24} mb={4}>
            Data Sharing and Disclosure
          </Heading>
          
          <Heading as="h3" fontSize={20} mb={3} mt={4}>
            With Accountability Partners
          </Heading>
          <P>
            When you connect with accountability partners, they can see:
          </P>
          <List ml={6} my={4}>
            <ListItem>• Your username and profile picture</ListItem>
            <ListItem>• Your habit streaks and progress (if you choose to share)</ListItem>
            <ListItem>• Your leaderboard rankings</ListItem>
          </List>

          <Heading as="h3" fontSize={20} mb={3} mt={4}>
            With Third-Party Service Providers
          </Heading>
          <P>
            We may share data with trusted service providers who assist us in:
          </P>
          <List ml={6} my={4}>
            <ListItem>• Cloud storage and hosting (Firebase)</ListItem>
            <ListItem>• Analytics and app performance monitoring</ListItem>
            <ListItem>• Push notification delivery</ListItem>
            <ListItem>• Customer support services</ListItem>
          </List>

          <Heading as="h3" fontSize={20} mb={3} mt={4}>
            We Never Sell Your Data
          </Heading>
          <P>
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </P>
        </Section>

        <Section delay={0.5}>
          <Heading as="h2" fontSize={24} mb={4}>
            Data Security
          </Heading>
          <P>
            We implement industry-standard security measures to protect your data:
          </P>
          <List ml={6} my={4}>
            <ListItem>• Encryption of data in transit and at rest</ListItem>
            <ListItem>• Secure authentication protocols</ListItem>
            <ListItem>• Regular security audits and updates</ListItem>
            <ListItem>• Access controls and monitoring</ListItem>
          </List>
          <P>
            However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
          </P>
        </Section>

        <Section delay={0.6}>
          <Heading as="h2" fontSize={24} mb={4}>
            Your Rights and Choices
          </Heading>
          <P>
            You have the right to:
          </P>
          <List ml={6} my={4}>
            <ListItem>• Access your personal data</ListItem>
            <ListItem>• Update or correct your information</ListItem>
            <ListItem>• Delete your account and associated data</ListItem>
            <ListItem>• Export your habit data</ListItem>
            <ListItem>• Opt-out of notifications</ListItem>
            <ListItem>• Disconnect from accountability partners</ListItem>
            <ListItem>• Control your privacy settings</ListItem>
          </List>
          <P>
            To exercise these rights, please contact us at the email address provided below or use the in-app settings.
          </P>
        </Section>

        <Section delay={0.7}>
          <Heading as="h2" fontSize={24} mb={4}>
            Data Retention
          </Heading>
          <P>
            We retain your data for as long as your account is active or as needed to provide services. When you delete your account:
          </P>
          <List ml={6} my={4}>
            <ListItem>• Your personal information will be permanently deleted within 30 days</ListItem>
            <ListItem>• Anonymized usage data may be retained for analytics purposes</ListItem>
            <ListItem>• Backup copies may persist for up to 90 days</ListItem>
          </List>
        </Section>

        <Section delay={0.8}>
          <Heading as="h2" fontSize={24} mb={4}>
            Children&apos;s Privacy
          </Heading>
          <P>
            Momentum is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13. If we discover that we have collected data from a child under 13, we will delete it immediately.
          </P>
        </Section>

        <Section delay={0.9}>
          <Heading as="h2" fontSize={24} mb={4}>
            International Data Transfers
          </Heading>
          <P>
            Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
          </P>
        </Section>

        <Section delay={1.0}>
          <Heading as="h2" fontSize={24} mb={4}>
            Changes to This Privacy Policy
          </Heading>
          <P>
            We may update this Privacy Policy from time to time. We will notify you of any changes by:
          </P>
          <List ml={6} my={4}>
            <ListItem>• Posting the new Privacy Policy in the app</ListItem>
            <ListItem>• Updating the &quot;Last Updated&quot; date</ListItem>
            <ListItem>• Sending you an email notification for material changes</ListItem>
          </List>
          <P>
            Your continued use of Momentum after changes constitutes acceptance of the updated Privacy Policy.
          </P>
        </Section>

        <Section delay={1.1}>
          <Heading as="h2" fontSize={24} mb={4}>
            Contact Us
          </Heading>
          <P>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:
          </P>
          <Box ml={6} my={4}>
            <P>
              <strong>Email:</strong> privacy@momentum-app.com
            </P>
            <P>
              <strong>Support:</strong> support@momentum-app.com
            </P>
          </Box>
        </Section>

        <Box my={8} p={4} bg="gray.100" borderRadius="md">
          <P fontSize="sm" textAlign="center">
            By using Momentum, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
          </P>
        </Box>
      </Container>
    </Layout>
  )
}

export default Privacy
export { getServerSideProps } from '../components/chakra'
