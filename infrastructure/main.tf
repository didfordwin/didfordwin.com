provider "aws" {
  region = "${var.region}"
}

resource "aws_route53_zone" "primary" {
  name = "didfordwin.com"
}

resource "aws_route53_record" "acm" {
  zone_id = "${aws_route53_zone.primary.id}"
  name    = "_d367cbd3e128917a2e59e1817ab41310.didfordwin.com"
  type    = "CNAME"
  ttl     = "30"

  records = [
    "_bad0c9f712ef2f732a66fd31b23f1d5e.acm-validations.aws",
  ]
}

resource "aws_iam_user" "webmaster" {
  name = "webmaster"
}

module "site_main" {
  source = "github.com/ringods/terraform-website-s3-cloudfront-route53//site-main"

  region                           = "${var.region}"
  domain                           = "${var.domain}"
  bucket_name                      = "${var.domain}"
  duplicate-content-penalty-secret = "${var.duplicate_content_penalty_secret}"
  deployer                         = "${aws_iam_user.webmaster.id}"
  acm-certificate-arn              = "${var.acm_arn}"
  not-found-response-path          = "/404.html"
  forward-query-string             = true
  project                          = "${var.project}"
  price_class                      = "${var.price_class}"
}

module "site-redirect" {
  source = "github.com/ringods/terraform-website-s3-cloudfront-route53//site-redirect"

  region                           = "${var.region}"
  domain                           = "www.${var.domain}"
  target                           = "${var.domain}"
  duplicate-content-penalty-secret = "${var.duplicate_content_penalty_secret}"
  deployer                         = "${aws_iam_user.webmaster.id}"
  acm-certificate-arn              = "${var.acm_wc_arn}"
}

module "dns-cname" {
  source = "github.com/ringods/terraform-website-s3-cloudfront-route53//r53-cname"

  domain          = "www.${var.domain}"
  target          = "${module.site_main.website_cdn_hostname}"
  route53_zone_id = "${aws_route53_zone.primary.id}"
}

module "dns-alias" {
  source = "github.com/ringods/terraform-website-s3-cloudfront-route53//r53-alias"

  domain             = "${var.domain}"
  target             = "${module.site_main.website_cdn_hostname}"
  cdn_hosted_zone_id = "${module.site_main.website_cdn_zone_id}"
  route53_zone_id    = "${aws_route53_zone.primary.id}"
}
