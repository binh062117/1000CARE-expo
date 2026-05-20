export * from './AuthAPI'
export * from './CategoriesAPI'
export * from './SuppliersAPI'
export * from './ProductsAPI'
export * from './DistributorAPI'
export * from './CartAPI'
export * from './OrderAPI'
export * from './AccountingAPI'
export * from './EwalletAPI'
export * from './AddressApi'
export * from './RegisterAPI'
export * from './WishlistApi'
export * from './BannerApi'
export * from './SearchAPI'
export * from './CampaignApi'
export * from './NotiAPI'
export * from './ReferralAPI'
export * from './PharmaciesAPI'
export * from './CdnAPI'
export * from './VoucherAPI'
export * from './TrademarksAPI'
export * from './AdsApi'
export * from './VersionAPI'
export * from './ProductAPICustom'
export * from './CartAPICustom'
export * from './VietQrAPI'

import { Categories } from './CategoriesAPI'
import { Suppliers } from './SuppliersAPI'
import { Products } from './ProductsAPI'
import { Distributor } from './DistributorAPI'
import { Carts } from './CartAPI'
import { Orders } from './OrderAPI'
import { Accounting } from './AccountingAPI'
import { Ewallet } from './EwalletAPI'
import { Addresses } from './AddressApi'
import { Register } from './RegisterAPI'
import { Wishlist } from './WishlistApi'
import { Banners } from './BannerApi'
import { Search } from './SearchAPI'
import { Campaign } from './CampaignApi'
import { Noti } from './NotiAPI'
import { Referral } from './ReferralAPI'
import { Pharmacy } from './PharmaciesAPI'
import { Cdn } from './CdnAPI'
import { Voucher } from './VoucherAPI'
import { Trademarks } from './TrademarksAPI'
import { Ads } from './AdsApi'
import { Version } from './VersionAPI'
import { ProductAPICustom } from './ProductAPICustom'
import { CartAPICustom } from './CartAPICustom'
import { VietQr } from './VietQrAPI'

export const updateToken = (token) => {
  Categories.updateToken(token)
  Suppliers.updateToken(token)
  Products.updateToken(token)
  Carts.updateToken(token)
  Orders.updateToken(token)
  Distributor.updateToken(token)
  Accounting.updateToken(token)
  Ewallet.updateToken(token)
  Addresses.updateToken(token)
  Register.updateToken(token)
  Wishlist.updateToken(token)
  Search.updateToken(token)
  Banners.updateToken(token)
  Campaign.updateToken(token)
  Noti.updateToken(token)
  Referral.updateToken(token)
  Pharmacy.updateToken(token)
  Cdn.updateToken(token)
  Voucher.updateToken(token)
  Trademarks.updateToken(token)
  Ads.updateToken(token)
  Version.updateToken(token)
  VietQr.updateToken(token)
}