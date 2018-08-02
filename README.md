# Did Ford Win?

Website for the Did Ford Win movement. We are a bipartisan group of Ontario residents who are deeply curious about the 2018 CPC Ontario leadership election.

## Contributing

Please read and understand our [code of conduct]: ./CODE_OF_CONDUCT.md "Did Ford Win Code of Conduct" before making contributions.

Unfortunately we cannot accept all contributions. This project has very specific requirements including but not limited to:

- Fairness, especially to Ford and their family. The purpose of this site is to answer the questions Did Ford Win the 2018 Ontario CPC leadership elections, and if so did Ford win fairly?
- Accessibility, we are committed to making an accessible website which means all information needs to be equally represented with or without JavaScript _and_ accessible to as many differently abled people as possible.
- Content over Code. Meaning we are looking for fact based content. Some code contributions will be welcome, especially if they fix bugs, but primarily we need content.
- Thoughfulness. This site's content aims to present as small a surface area as possible. We want to stick to concise information as to appeal to as many people as possible.

This contributor guide will likely change as this project evolves, please check here for updates.

### Codebase

This code base attempts to follow industry conventions where possible. You will need `yarn` installed and you should probably have some familiarity with JavaScript projects in 2018.

Currently there are two aspects to the code base:

- Static website in the form of [GatsbyJS]: https://www.gatsbyjs.org/ 'Gatsby JS a static site generator'
- Infrastructure in the form of [Terraform Configurations]: https://terraform.io 'Terraform a cloud configuration and deployment tool'

Currently there is not much need to adjust the infrastrucutre. The static website on the other hand will need help.

To get started developing on the website be familiar with [Gatsby]: https://www.gatsbyjs.org/docs/ 'Gatsby Documentation'. The folder `website/` contains a standard Gatsby project.

After checking out the code be sure to run a `yarn install` from the source code root. After that run `yarn develop` to get a real time development server.

## License

[![GPLv3 License Logo and Local Text][licenseimage]][licensetext]

[licenseimage]: https://www.gnu.org/graphics/gplv3-127x51.png 'GPLv3 logo'
[licensetext]: ./LICENSE 'GPLv3 Full Text'
