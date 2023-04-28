import axios from "axios";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const BASLANGIC_DEGERİ = "BASLANGIC_DEGERİ";

export function notEkle(not) {
  // ...
  return { type: NOT_EKLE, payload: not };
}

export function notSil(notId) {
  // ...
  return { type: NOT_SIL, payload: notId };
}
export function baslangicDegeri() {
  return { type: BASLANGIC_DEGERİ };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch({ type: NOT_EKLE, payload: res.data.json });
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
      }
    })
    .catch((error) => console.log(error));
};

export const notSilAPI = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch({ type: NOT_SIL, payload: res.data.data });
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
      }
    })
    .catch((error) => console.log(error));
};
