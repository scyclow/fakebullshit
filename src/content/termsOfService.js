
const formatSection = (ix, titleHeader, ...content) => ({
  title: `SECTION ${ix}. ${titleHeader}`,
  content
});

const company = {
  lowercase: 'FakeBullshit.news',
  uppercase: 'FAKEBULLSHIT.news'
};

const welcome = (ix) =>
  formatSection(ix, 'Welcome',
    `Welcome to the ${company.uppercase} website (hereinafter referred to as “Site”). ${company.uppercase} provides serivices to you subject to agreements, notices, terms, and agreements set forth in this agreement (hereinafter referred to as the “Agreement”). In addition, when you agree to use any of our services, including the Site, you will be subject to the rules, guidelines, policies, terms, and agreements applicable to such service, and said services are hereby incorporated into this Agreement by reference. ACCESSING, BROWSING, OR OTHERWISE USING THE SITE INDICATES YOUR AGREEMENT TO ALL OF THE TERMS AND CONDITIONS IN THIS AGREEMENT.`
  );


const age = (ix) =>
  formatSection(ix, 'Access',
    `You represent and warrant that you are at least eighteen (18) years old or, if younger, visiting the Site under the supervision of a parent or guardian. Subject to the terms and conditions of this Agreement, we hereby grant you a limited, revocable, non-transferable and non-exclusive license to access and use the Site by displaying it on your internet browser only for the purpose of on the Site and not for any commercial use or use on behalf of any third party, except as explicitly permitted by us in advance. Any breach of this Agreement shall result in the immediate revocation of the license granted in this paragraph without notice to you.`
  );

const warranty = (ix) =>
  formatSection(ix, 'Warranty',
    `The material in this site could include technical or factual inaccuracies. THE MATERIALS IN THIS SITE ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESSED OR IMPLIED, TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW. ${company.uppercase} DISCLAIMS ALL WARRANTIES OR MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. ${company.uppercase} DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE MATERIAL WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ${company.uppercase} DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OF OR THE RESULT OF THE USE OF THE MATERIAL IN THIS SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. YOU (AND NOT ${company.uppercase}) ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. THE ABOVE EXCLUSION MAY NOT APPLY TO YOU, TO THE EXTENT THAT APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES.`
  );

const forumSelection = (ix) =>
  formatSection(ix, 'Forum Selection Clause',
    `If there is any dispute about or involving the ${company.lowercase} Services, you agree that the dispute shall be governed by the laws of the The West Bank or North Cyprus, without regard to conflict of law provisions and you agree to exclusive personal jurisdiction and venue in the state and federal courts of the United States located in The West Bank or North Cyprus. Either ${company.lowercase} or you may demand that any dispute between ${company.lowercase} and you about or involving the ${company.lowercase} Services must be settled by arbitration utilizing the dispute resolution procedures of the West Bank Arbitration Association (WBAA), or Northern Cyprus Arbitration Association (NCAA), provided that the foregoing shall not prevent ${company.lowercase} from seeking injunctive relief in a court of competent jurisdiction.`
  );

const rightsAndResponsabilities = (ix) =>
  formatSection(ix, 'Statement of Rights and Responsibilities',
    `This Statement of Rights and Responsibilities ("Statement," "Terms," or "SRR") is our terms of service that governs our relationship with users and others who interact with ${company.lowercase}, as well as ${company.lowercase} brands, products and services, which we call the “${company.lowercase} Services” or “Services”. By using or accessing the ${company.lowercase} Services, you agree to this Statement, as updated from time to time.`,
    `Except as permitted in above, you may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile or otherwise exploit this Site or any portion of it unless expressly permitted by us in writing. You may not make any commercial use of any of the information provided on the Site or make any use of the Site for the benefit of another business unless explicitly permitted by us in advance. We reserve the right to refuse service, terminate accounts, and/or cancel orders at its discretion, including, without limitation, if we believe that customer conduct violates applicable law or is harmful to our interests.`,
    `Because ${company.lowercase} provides a wide range of Services, we update these terms and add supplemental terms that apply to your interaction with a specific app, product, or service without notification. To the extent those supplemental terms conflict with this SRR, the supplemental terms associated with the app, product, or service govern with respect to your use of such app, product or service to the extent of the conflict.`
  );

const intellectualProperty = (ix) =>
  formatSection(ix, 'Intellectual Property',
    `${company.lowercase} owns all of the content and information you post on ${company.lowercase}, and you hereby relinquish all control over said content and information. In addition:`,
    `For content that is covered by intellectual property rights, like photos and videos (IP content), you specifically give us the following permission, subject to your privacy and application settings: you grant us an exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any IP content that you post on or in connection with ${company.lowercase}. This IP License does not end when you delete your IP content or your account.`,
    `You shall not upload to, distribute, or otherwise publish through this Site any Content, information, or other material that (a) violates or infringes the copyrights, patents, trademarks, service marks, trade secrets, or other proprietary rights of any person; (b) is libelous, threatening, defamatory, obscene, indecent, pornographic, or could give rise to any civil or criminal liability under U.S. or international law; or (c) includes any bugs, viruses, worms, trap doors, Trojan horses or other harmful code or properties.`,
    `All text, graphics, button icons, images, audio clips, and software (hereinafter after collectively referred to as the "Content"), belongs exclusively to ${company.uppercase}, or its affiliates. The collection, arrangement, and assembly of all Content on this Site (hereinafter referred to as the "Compilation") belongs exclusively to ${company.uppercase} or its affiliates. All software used on this Site (hereinafter referred to as the "Software") is the property of ${company.uppercase}, its affiliates or its Software suppliers. The Content, the Compilation and the Software are all protected by U.S. and international copyright laws. ${company.uppercase} and other logos, slogans, trade names or words are registered trademarks, trademarks, trademarks or service marks of ${company.uppercase}, its affiliates, suppliers, or third parties. The use of any of our trademarks or service marks without our express written consent is strictly prohibited. You may not use our trademarks or service marks in connection with any product or service in any way that is likely to cause confusion. You may not use our trademarks or service marks in any manner that disparages or discredits us. You may not use any of our trademarks or service marks in meta tags without prior explicit consent.`,
    `${company.lowercase} does not represent or endorse the accuracy or reliability of any advice, opinion, statement, or other information displayed, uploaded, or distributed through the Services by any user, information provider or any other person or entity. You acknowledge that any reliance upon any such opinion, advice, statement, memorandum, or information shall be at your sole risk. THE SERVICES AND ALL DOWNLOADABLE SOFTWARE ARE DISTRIBUTED ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. YOU HEREBY ACKNOWLEDGE THAT USE OF THE SERVICES IS AT YOUR SOLE RISK.`
  );

const ending = () =>
  formatSection('', '',
    `We always appreciate your feedback or other suggestions about ${company.lowercase}, but you understand that we may use your feedback or suggestions without any obligation to compensate you for them.`
  );

const copy = [
  welcome,
  age,
  intellectualProperty,
  forumSelection,
  rightsAndResponsabilities,
  warranty,
  ending
].map((section, ix) => section(ix + 1));

export default copy;
