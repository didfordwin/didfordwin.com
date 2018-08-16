# Did Ford Win?

Website for the Did Ford Win movement. We are a bipartisan group of Ontario residents who are deeply curious about the 2018 PC Ontario leadership election.

## Contributing Indirectly

Information is always welcome. We maintain a [presence on Twitter](https://twitter.com/DidFordWin 'Ransom Olds on Twitter') you can direct message us there or '@' message us. We will attempt to look into your information and if it checks out and first with our [code of conduct](./CODE_OF_CONDUCT.md 'Project Code of Conduct') we will add it.

Another easy way to indirectly contribute is to [submit an issue to our GitHub repository](https://github.com/didfordwin/didfordwin.com/issues 'Submit issues directly to our GitHub repository')

## Contributing Directly

Please read and understand our [code of conduct](./CODE_OF_CONDUCT.md 'Did Ford Win Code of Conduct') before making contributions.

Unfortunately we cannot accept all contributions. This project has very specific requirements including but not limited to:

- Fairness, especially to Ford and their family. The purpose of this site is to answer the questions Did Ford Win the 2018 Ontario CPC leadership elections, and if so did Ford win fairly?
- Accessibility, we are committed to making an accessible website which means all information needs to be equally represented with or without JavaScript _and_ accessible to as many differently abled people as possible.
- Content over Code. Meaning we are looking for fact based content. Some code contributions will be welcome, especially if they fix bugs, but primarily we need content.
- Thoughtfulness. This site's content aims to present as small a surface area as possible. We want to stick to concise information as to appeal to as many people as possible.

This contributor guide will likely change as this project evolves, please check here for updates.

### Codebase

This code base attempts to follow industry conventions where possible. You will need `yarn` installed and you should probably have some familiarity with JavaScript projects in 2018.

Currently there are two aspects to the code base:

- Static website in the form of [GatsbyJS](https://www.gatsbyjs.org/ 'Gatsby JS a static site generator')
- Infrastructure in the form of [Terraform Configurations](https://terraform.io 'Terraform a cloud configuration and deployment tool')

Currently there is not much need to adjust the infrastructure. The static website on the other hand will need help.

To get started developing on the website be familiar with [Gatsby](https://www.gatsbyjs.org/docs/ 'Gatsby Documentation'). The folder `website/` contains a standard Gatsby project.

After checking out the code be sure to run a `yarn install` from the source code root. After that run `yarn develop` to get a real time development server.

### Signatures and GPG

This project uses [GNU Privacy Guard](https://gnupg.org/ 'GNU Privacy Guard') to sign commits.

Be familiar with the [git manual](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work 'Git GNU Privacy Guard documentation') and the [GitHub documentation](https://help.github.com/articles/signing-commits-using-gpg/ 'GitHub GNU Privacy Guard documenation')

## License

[![GPLv3 License Logo and Local Text][licenseimage]][licensetext]

[licenseimage]: https://www.gnu.org/graphics/gplv3-127x51.png 'GPLv3 logo'
[licensetext]: ./LICENSE 'GPLv3 Full Text'
