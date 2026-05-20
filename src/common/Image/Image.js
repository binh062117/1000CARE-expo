import React, { useEffect, useState } from 'react';
import { Image as RNImage } from 'react-native';
import { image_error } from '~/assets/constants';
import CryptoJS from 'crypto-js';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const KEY = '83235c504b3d41e1471c8dc8d691279cdc4c6ba5fc8737ceacbaf8735543e5ca0d4b918ee620e31de8495d7e4ee982db2bab98de086bb13997b786944db44d27';
const SALT = '10b2225c3e20b085e46c0c35020b35c7c175961aa97ed6e268ad0a63ef03524e09dc32b4e80d9c98ad5d630383fa461fc4fafd8c0a5a2878fdade646d90f25f6';

const Image = ({ errorImage, heightImage, widthImage, style, ...props }) => {
  const [source, setSource] = useState(props.source?.uri === '' ? image_error : props.source);
  const [isLoading, setIsLoading] = useState(true);

  const hexDecode = (hex) => CryptoJS.enc.Hex.parse(hex);
  const sign = (salt, target, secret) => {
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, hexDecode(secret));
    hmac.update(hexDecode(salt));
    hmac.update(target);
    const s = CryptoJS.enc.Base64.stringify(hmac.finalize());
    return s.replace(/[=]/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  };

  useEffect(() => {
    if (props?.source?.uri) {
      const url = props.source.uri;
      // const resizing_type = 'fit';
      // const width = widthImage ? 2 * Number(widthImage).toFixed(0) : 300;
      // const height = heightImage ? 2 * Number(heightImage).toFixed(0) : 300;
      // const gravity = 'no';
      // const enlarge = 1;
      // const extension = 'png';
      // const path = `/resizing_type:${resizing_type}/width:${width}/height:${height}/gravity:${gravity}/el:${enlarge}/quality:100/plain/${encodeURIComponent(url)}@${extension}`;
      // const signature = sign(SALT, path, KEY);
      // const result = 'https://med-cdn.1000m.vn/images' + `/${signature}${path}`;
      setSource({ uri: url });
    } else {
      if (props.source?.uri === '') {
        setSource(image_error);
      } else {
        setSource(props.source);
      }
    }
    setIsLoading(false);
  }, [props.source]);

  if (isLoading) {
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          width={widthImage || 28}
          height={heightImage || 28}
          borderRadius={0}
        />
      </SkeletonPlaceholder>
    );
  }

  return (
    <RNImage
      {...props}
      source={source}
      style={style}
      onError={() => setSource(errorImage ? errorImage : image_error)}
    />
  );
};

export default Image;
