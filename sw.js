// Hinano Coffee のオフライン用。ページは通信を先に試し（更新をすぐ届ける）、
// つながらないときは前に保存したものを出す。絵とアイコンは保存したものを先に使う。
// 次の2行は tools/publish.sh が公開のたびに書き換える（版を変えると古い絵の保存を捨てて取り直す）。
var CACHE = 'hinano-coffee-20261128-869a065';
var ART = ['./art/dio/chr_gourmet_a_198x32.png','./art/dio/chr_gourmet_a_sit_72x32.png','./art/dio/chr_gourmet_a_togo_108x32.png','./art/dio/chr_gourmet_b_198x32.png','./art/dio/chr_gourmet_b_sit_72x32.png','./art/dio/chr_gourmet_b_togo_108x32.png','./art/dio/chr_gq01_270x32.png','./art/dio/chr_gq02_270x32.png','./art/dio/chr_gq03_270x32.png','./art/dio/chr_gq05_270x32.png','./art/dio/chr_gq06_270x32.png','./art/dio/chr_gq08_270x32.png','./art/dio/chr_gq10_270x32.png','./art/dio/chr_gq11_270x32.png','./art/dio/chr_gq17_270x32.png','./art/dio/chr_gq18_270x32.png','./art/dio/chr_gq21_270x32.png','./art/dio/chr_neighbor_a_198x32.png','./art/dio/chr_neighbor_a_sit_72x32.png','./art/dio/chr_neighbor_a_togo_108x32.png','./art/dio/chr_neighbor_b_198x32.png','./art/dio/chr_neighbor_b_sit_72x32.png','./art/dio/chr_neighbor_b_togo_108x32.png','./art/dio/chr_reg01_270x32.png','./art/dio/chr_reg02_270x32.png','./art/dio/chr_reg03_270x32.png','./art/dio/chr_reg04_270x32.png','./art/dio/chr_reg05_270x32.png','./art/dio/chr_reg06_a_270x32.png','./art/dio/chr_reg06_b_270x32.png','./art/dio/chr_reg07_270x32.png','./art/dio/chr_reg08_270x32.png','./art/dio/chr_reg09_270x32.png','./art/dio/chr_reg10_270x32.png','./art/dio/chr_staff_a_288x32.png','./art/dio/chr_staff_a_chores_72x32.png','./art/dio/chr_staff_b_288x32.png','./art/dio/chr_staff_b_chores_72x32.png','./art/dio/chr_student_a_198x32.png','./art/dio/chr_student_a_sit_72x32.png','./art/dio/chr_student_a_togo_108x32.png','./art/dio/chr_student_b_198x32.png','./art/dio/chr_student_b_sit_72x32.png','./art/dio/chr_student_b_togo_108x32.png','./art/dio/chr_worker_a_198x32.png','./art/dio/chr_worker_a_sit_72x32.png','./art/dio/chr_worker_a_togo_108x32.png','./art/dio/chr_worker_b_198x32.png','./art/dio/chr_worker_b_sit_72x32.png','./art/dio/chr_worker_b_togo_108x32.png','./art/dio/fx_chaff_32x8.png','./art/dio/fx_pop_32x8.png','./art/dio/fx_roast_smoke_192x32.png','./art/dio/fx_smoke_96x24.png','./art/dio/fx_window_rain_112x28.png','./art/dio/obj_backcounter_84x26.png','./art/dio/obj_balloon_32x40.png','./art/dio/obj_barrel_table_28x24.png','./art/dio/obj_bean_sacks_28x24.png','./art/dio/obj_bookshelf_28x44.png','./art/dio/obj_buildings_448x96.png','./art/dio/obj_buildings_night_448x96.png','./art/dio/obj_buildings_night_snow_448x96.png','./art/dio/obj_buildings_snow_448x96.png','./art/dio/obj_bunting_56x12.png','./art/dio/obj_cat_96x16.png','./art/dio/obj_chair_48x24.png','./art/dio/obj_chalk_stand_20x24.png','./art/dio/obj_counter_84x26.png','./art/dio/obj_counter_items_84x16.png','./art/dio/obj_crate_seat_24x24.png','./art/dio/obj_entrance_56x16.png','./art/dio/obj_entrance_wet_28x16.png','./art/dio/obj_espresso_28x32.png','./art/dio/obj_event_door_112x28.png','./art/dio/obj_golf_flag_32x32.png','./art/dio/obj_grinder_14x30.png','./art/dio/obj_level_wall_84x28.png','./art/dio/obj_milk_crates_28x30.png','./art/dio/obj_pastry_case_48x18.png','./art/dio/obj_plant_28x40.png','./art/dio/obj_queue_sign_20x24.png','./art/dio/obj_register_24x18.png','./art/dio/obj_roaster_42x44.png','./art/dio/obj_rug_84x54.png','./art/dio/obj_season_deco_112x40.png','./art/dio/obj_sign_72x18.png','./art/dio/obj_sign_night_72x18.png','./art/dio/obj_sink_28x14.png','./art/dio/obj_sofa_56x36.png','./art/dio/obj_street_lamp_48x56.png','./art/dio/obj_table_28x24.png','./art/dio/obj_tm_plate_12x12.png','./art/dio/obj_tree_160x48.png','./art/dio/obj_umbrella_72x16.png','./art/dio/obj_umbrella_stand_20x30.png','./art/dio/obj_wall_parts_112x28.png','./art/dio/obj_window_56x28.png','./art/dio/obj_window_night_56x28.png','./art/dio/obj_yacht_sign_28x28.png','./art/dio/roast_ami_320x288.png','./art/dio/roast_coal_288x20.png','./art/dio/roast_coal_bincho_288x20.png','./art/dio/roast_flame_288x20.png','./art/dio/roast_stage_80x80.png','./art/dio/roast_stage_shichirin_80x80.png','./art/dio/tile_event_garland_224x12.png','./art/dio/tile_floor_kitchen_56x36.png','./art/dio/tile_floor_wood_56x36.png','./art/dio/tile_floor_wood_lv5_56x36.png','./art/dio/tile_frontwall_28x8.png','./art/dio/tile_ground_168x36.png','./art/dio/tile_sidewalk_168x26.png','./art/dio/tile_sky_336x22.png','./art/dio/tile_sky_dusk_night_224x22.png','./art/dio/tile_string_lights_112x10.png','./art/dio/tile_wall_back_56x40.png','./art/dio/tile_wall_back_lv5_56x40.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'].concat(ART));
  }));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    // 同じ系統（本番どうし・試し版どうし）の古い版だけを消す。もう一方の保存には触らない
    var next = CACHE.indexOf('-next-') >= 0;
    return Promise.all(ks.filter(function (k) {
      return k !== CACHE && k.indexOf('hinano-coffee-') === 0 && (k.indexOf('-next-') >= 0) === next;
    }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  var isPage = req.mode === 'navigate' || /\/(index\.html)?(\?.*)?$/.test(new URL(req.url).pathname);
  if (isPage) {
    e.respondWith(fetch(req).then(function (r) {
      var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); return r;
    }).catch(function () { return caches.match(req, {ignoreSearch: true}).then(function (r) { return r || caches.match('./index.html'); }); }));
    return;
  }
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (r) {
      if (r.ok) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); }
      return r;
    });
  }));
});
