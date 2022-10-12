//object destrcturing
const band = {
    bandname: 'sind benjo',
    famoussong: 'tuzhe mai rab dikhta hai',
    year: 1968,
    cyear:2022
    
};
// console.log(band.bandname,band.famoussong);
// // const{bandname,famoussong}=band;
// // console.log(bandname,famoussong);
let { bandname:name, famoussong, ...restp } = band;
// console.log(bandname);
console.log(restp);
console.log(name)
console.log(bandname)

