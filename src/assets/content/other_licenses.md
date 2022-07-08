
# License Resources

Resource | Description
--- | ---
[Open Source Initiative](https://opensource.org/)
[Open Source Licenses and more](./Open Source_Licenses and More_KGC_11NOV2020.pdf)
Open Source Licenses and more	Slide deck on open source licenses authored by Katja Glass (and added with permission) from Nov 2020. She also has information on her web site https://www.glacon.eu/opensource.html 
https://opensource.org/licenses	Widely used site on open source licenses from the Open Source Initiative
CC0 1.0 Universal (CC0 1.0)
Public Domain Dedication or

BSD Zero Clause License

Code snippets used in examples, blogs, etc that you want to release into the public domain without the need for attribution, etc.
MIT open source license	Popular, permissive open source license used by CDISC, Microsoft, and many others.
Open Source & Microsoft Licensing & OSPOs	
Microsoft Open Source & Standards / GitHub Developer Policy

Justin C. Colannino (Microsoft)


# Open Source Article about Licenses (2022-03-01)

Licenses are very important, because if you see source code which is not connected to any license, that means it likely falls under copyright. When there is valuable source code in papers where no license is mentioned, you are not allowed to copy the code. Ideally the code is additionally contained in a public repository, whether it is in GitHub, GitLab, SourceForge or anything similar where a license can be specifically applied. Some forums like Stack Overflow apply licenses in their [terms of service](https://stackoverflow.com/legal/terms-of-service#licensing) to allow anyone to freely use questions and answers - in this case CC-BY-SA.

The license tells you how that source code can be used, modified and shared. The [open source initiative](https://opensource.org/) (OSI) maintains a list of standard open source licenses and provides a lot of guidance. It is highly recommended to only use standard open source licenses as these are legally discussed and clarified a lot.

## Creative Commons vs. Open-Source licenses

Wheres creative commons are designed to share any work, the open-source licenses are specifically designed for source code. The principles are more or less the same. It defines how you can use and remix work of others.

<div style="max-width: 700px;"><img src="./img/2022-03-01-licenses-02.png" style="max-width: 100%;" alt="CC License overview"></div>

The CC licenses are very much straight forward. CC0 is public domain knowledge which means it can be used without any considerations. For CC-BY, the author needs to be mentioned. CC-BY-SA contains also the "share-alike" condition. This means when derivates are created and distributed, these derived works must gant the same rights.

The CC licenses also have some restricting tags which is the "NC" for non-commercial and "ND" which allows no derives.

For source code there are two groups of licenses which are the permissable licenses, which are similar to CC-BY (mention the creator) and the copyleft licenses which are similar to Share-Alike as here conditions apply to share the derives as well using the same / a compatible license.

<img src="./img/2022-03-01-licenses-01.png" maxwidth="100%" alt="CC License overview">

In 2021 the permissable licenses like Apache and MIT are the most popular ones. For copyright licenses the Gnu licenses like GPLv3 and GPLv2 are the most popular ones. ([WhiteSource](https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-trends-and-predictions/))

## Permissible Licenses (Open-Source)

The permissible license group is the most flexible and straight forward license type. It can be compared to the BY-Attribution of the Creative Commons license for other works. The license itself typically explains how to mention the creator. The "unlicenses" license can be seen as public domain knowledge and can be used without any limitations – no notifications or the creator is required. 

For other permissible licenses like the "MIT", the source code can be used, but additional information must be kept. Some license types like the "Apache License 2.0" also specify how to document modifications. The "Apache" license also contains a specific section dealing with patents and is very popular due to these conditions. "BSD" additionally prohibits endorsements and promotions for derived products of the original creators or contributors. The "MIT" is extremly famous especially in smaller projects as it is super-easy to use, modify and re-share. The only thing to do: 

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

Meaning, when use, modify or share this or deriving code, just keep the complete copyright notice.

The derived code can use any kind of license. It could even be proprietary code or a software which can be sold. Just make sure to deliver the original copyright-notice as well.

## Copyleft Licenses (Open-Source)

The copyleft category of licenses contains additional rules to allow users of derived code the same rights like received. This is called copyleft. When receiving software with the rights to use, share, modify, users of the newly derived source should get the same rights granted. The most common licenses used are those from the GNU-family. The core license is the GNU General Public License (GPL). All rights received must be provided the users of the derived work as well. 

The Lesser General Public License (LGPL) states that the software license for the derived work must not be shared when using the LGPL parts only as libraries. This license is more open to support commercial software. The Affero General Public License (AGPL) in contrast is stricter and requires the grant to use, modify and share rights for derived work also when not the software is provided to the users, but software as a service (SaaS) is used.

## Remarks - Re-share rules

When using open source only within a company or organization – for this no external users available - then the company or organization is considered as one group and not as other users. Finally, the derived source code from copyleft licenses can then only be kept within the companies without the need to further publish code. 

But when additional parties are involved like Clinical Research Organizations (CROs), academia or authorities, these become new users of a derived software, so in accordance with the corresponding copyleft license, these users must receive the same rights and for this likely also the source code. 

When user must be provided with the source code, this does not mean that the source code must be published in the internet to the public. It only means that the users must be able to get the source code. As the users have the same rights, they are also allowed to use, modify and share the source code, so finally source code can be shared through the internet to everyone by another user. But this is only a can, not a must.

## Example - Derive from permissible software

A software can be derived on another software using the permissable MIT license. 

That software could for example become a propriatary software where copyright applies. That software still needs to contain the license and acknowledgment from the MIT software. This allows a user of the propriatary software to see that it contains open code parts which the user then can trace back.

There could be other software derived from the MIT which could be published under the GPL license. Also here acknowledgments are kept and allow users to trace back the MIT source code.

<div style="max-width: 700px;"><img src="./img/2022-03-01-licenses-03.png" style="max-width: 100%;" alt="Example license usage"></div>

But it is not possible to derive copyright-software from a GPL software as this copyleft license requires that users also are granted with the same rights. Vice versa it is not possible to derive GPL software out of copyright code, just because it contains parts of MIT.

As a copyright holder it is still possible to apply different licenses to your source code. It is quite common to have an enterprise version and a community version which share quite a lot of code. But this is only an option for the copyright holder.

## Example - Sell copyleft software

Copyleft software includeing GPL does not mean it is for free. Such a software can be sold like any other product. When GPL software is sold, you just should be aware that the users get the corresponding GPL rights to use, share and modify the code.

GPL does not force you to publish this code into the internet. But the users have the right to receive that code. And as these users have the rights to use, modify and share, these could put the code to the internet, share it with other users or even sell it further. Disclosure agreements for GPL software is invalid. Legally there is no way to prohibit users using the GPL rights for a GPL software.

<div style="max-width: 700px;"><img src="./img/2022-03-01-licenses-04.png" style="max-width: 100%;" alt="Example 2 license usage"></div>

## License compatibility

Currently most software is created based on many different open source packages. When the final open-source tool should be released, it is imporant to check the license compatibility. When releasing only the own source code for example in GitHub, you could apply any license to your code, e.g. the very free permissable MIT license. 

Typically used third party software is simply referenced with a package manager like NPM or Maven, meaning the source code repository does not contain the third party source. During compilation all software pieces are bundled together to create the final software. That's where third party open source packages are included and their licenses needs to be fulfilled. 

As an example you can proivde MIT licensed source code which uses a GPL package. The source-code you created can be MIT. But the final software compiled out of your source code and the third-party GPL will result in a GPL or compatible software. When you distribute the software you have to be clear about the license of the software itself.

There is a nice overview about the compatibilities of licenses (David A. Wheeler, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via Wikimedia Commons):

<div style="max-width: 700px;"><img src="./img/2022-03-01-licenses-05.png" style="max-width: 100%;" alt="License compatibility overview"></div>

## Recommendation

My personal recommendation is to use the MIT license for small project or projects which should get a very broad user group. When you worry about patents, the Apache might be fitting better. When thinking about typical pharma tasks, I personally hardly imagine patent-related code except for special new statistical methodology. 

When you project is quite complex and you want to avoid commercialization of that code, then the copyleft licenses will fit better to that plan. Here the GPLv3 is the most commonly used and successful one.

[Choose a license](https://choosealicense.com/licenses/) gives you a very good overview of standard licenses which you might want to consider for your project.

Please also include a license like MIT when you publish code in papers and want other to be able to re-use this.

## Disclaimer

The information is provided to best knowlege without any legal warranty.

## About the Author

Katja Glaß has IT background and is for more than 15 years in the pharmaceutical industry. She is now working as part-time consultant focusing on open source for Pharma, hosting a portal about open-source solutions for clinical study evaluations. She has key experiences with SAS, Web Technologies, ADAM, Define.xml and the TLF generation. She is a very active PHUSE member where she led the EU Connect conference in 2018. In 2021 she became board member of COSA to support this initiative as well.