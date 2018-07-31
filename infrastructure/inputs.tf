variable "domain" {
  description = "Name of the domain to use"
}

variable "acm_arn" {
  description = "Amazon Resource Name of the TLS certificate for the apex domain"
}

variable "acm_wc_arn" {
  description = "Amazon Resource Name of the TLS certificate for the wild card domain"
}

variable "duplicate_content_penalty_secret" {
  description = "Value to use in cloud front headers to avoid bucket and CDN from both being indexed"
}

variable "region" {
  description = "The AWS region to use"
}

variable "project" {
  description = "Name of the project"
  default     = "didfordwin"
}

variable "price_class" {
  description = "How much to pay for Cloud Front"
  default     = "PriceClass_100"
}
