//camphost-db

///camgroundsCollection[{name:"Morraine", region: "NW", map: img.jpg, }]

//sitesCollection[{sitenumber:0, rv:false, tent:true, group:false, accessable:true}] landmarkLat, landmarkLong,
  //   <resultset 
  // contractCode="CO"
  // count="5"
  // parkId="50032"
  // resultType="campsites">
  // <result Loop="CONIFER RIDGE" Maxeqplen="31" Maxpeople="6" Site="MUSTCORI024"
  //   SiteId="1582" SiteType="&lt;= 40 FT. ELECTRIC - PREMIUM"
  //   sitesWithAmps="30" sitesWithPetsAllowed="N" sitesWithSewerHookup="N"
  //   sitesWithWaterHookup="N" sitesWithWaterfront=""/>


//reservationsCollection[{campers:[camper_id, camper_id], cg_id:, site_id:}]

//campersCollection[{email:email@example, password:}]

function createFigginsAndWill() {
  return User.remove({})
    .then(function f1() {
      return User.insert({name: "Figgins"})
    })
    .then(function f2(figgins) {
      return User.insert({name: "Will", managerId: figgins._id}).then(function f5(will) {
        return [figgins, will]
      })
    })
}

createFigginsAndWill().then(function f3(figginsAndWill) {
  return User.insert({name: "Finn", managerId: figginsAndWill[1]._id}).then(function f6(finn) {
    figginsAndWill.push(finn)
    return figginsAndWill
  })
})
.then(function f4(allThree) {
  console.log(allThree);
})


//export functions