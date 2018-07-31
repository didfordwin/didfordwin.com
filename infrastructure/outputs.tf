output zoneId {
  description = "ZoneId"
  value       = "${aws_route53_zone.primary.id}"
}

output website_cdn_hostname {
  description = "CDN HostName"
  value       = "${module.site_main.website_cdn_hostname}"
}
