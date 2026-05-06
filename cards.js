Hier ist die vollständige cards.js mit allen 150+ Karten:

```javascript
// cards.js – Cubaro Cards Complete Card Database

const ELEMENTS = ['Fire','Water','Nature','Earth','Storm','Metal','Light','Shadow','Arcane'];
const RARITIES = ['Common','Uncommon','Rare','Epic','Legendary','Full Art','Gold','Celestial'];
const CARDTYPES = ['Cubaro Creature','Item','Support','Special Energy'];
const STAGES = ['Base','Stage 1','Stage 2'];

const ELEMENTEMOJI = {
  Fire:'🔥', Water:'💧', Nature:'🌿', Earth:'🪨',
  Storm:'⚡', Metal:'⚙️', Light:'✨', Shadow:'🌑', Arcane:'🔮'
};

const RARITYCOLORS = {
  Common:'#aaa', Uncommon:'#00e676', Rare:'#00d4ff',
  Epic:'#b44fff', Legendary:'#ffd700',
  'Full Art':'#ffd700', Gold:'#ffd700', Celestial:'#aae0ff'
};

const ELEMENTCLASS = {
  Fire:'ef', Water:'ew', Nature:'en', Earth:'ee',
  Storm:'es', Metal:'em', Light:'el', Shadow:'esh', Arcane:'ea'
};

const DROPRATES = {
  Common: 0.60,
  Uncommon: 0.25,
  Rare: 0.10,
  Epic: 0.035,
  Legendary: 0.01,
  'Full Art': 0.003,
  Gold: 0.001,
  Celestial: 0.001
};

const CRAFTCOSTS = {
  Common: 20, Uncommon: 50, Rare: 150, Epic: 400,
  Legendary: 1000, 'Full Art': 2000, Gold: 5000, Celestial: 5000
};

const SHARDVALUES = {
  Common: 5, Uncommon: 10, Rare: 30, Epic: 80,
  Legendary: 200, 'Full Art': 400, Gold: 800, Celestial: 1000
};

// ── MASTER CARD DATABASE ──────────────────────────────────────────────
const ALLCARDS = [

  // ════════════════════════════════
  // FIRE LINE
  // ════════════════════════════════
  {
    id:'CUBFIRE001', name:'Embercub', type:'Cubaro Creature',
    stage:'Base', element:'Fire', evolvesFrom:null,
    hp:70, maxHp:70,
    attacks:[
      { name:'Ember Bite', cost:['Fire'], damage:30, effect:'10% chance to inflict Burn' },
      { name:'Spark Dash', cost:['Fire','Fire'], damage:50, effect:'' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'001/240',
    artVariant:'Standard', emoji:'🦁'
  },
  {
    id:'CUBFIRE002', name:'Flarepaws', type:'Cubaro Creature',
    stage:'Stage 1', element:'Fire', evolvesFrom:'Embercub',
    hp:100, maxHp:100,
    attacks:[
      { name:'Flame Claw', cost:['Fire','Fire'], damage:60, effect:'' },
      { name:'Blaze Rush', cost:['Fire','Fire','Fire'], damage:90, effect:'Inflict Burn' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:2,
    rarity:'Uncommon', set:'Genesis', cardNumber:'002/240',
    artVariant:'Standard', emoji:'🔥'
  },
  {
    id:'CUBFIRE003', name:'Blazeroar', type:'Cubaro Creature',
    stage:'Stage 2', element:'Fire', evolvesFrom:'Flarepaws',
    hp:160, maxHp:160,
    attacks:[
      { name:'Inferno Roar', cost:['Fire','Fire','Fire'], damage:120, effect:'Inflict Burn on all bench' },
      { name:'Solar Flare', cost:['Fire','Fire','Fire','Fire'], damage:180, effect:'Discard 2 Fire energy' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:3,
    rarity:'Rare', set:'Genesis', cardNumber:'003/240',
    artVariant:'Standard', emoji:'🦅'
  },
  {
    id:'CUBFIREEX001', name:'Blazeroar EX', type:'Cubaro Creature',
    stage:'Base', element:'Fire', evolvesFrom:null,
    hp:200, maxHp:200,
    attacks:[
      { name:'Meteor Crash', cost:['Fire','Fire'], damage:100, effect:'Inflict Burn' },
      { name:'Supernova', cost:['Fire','Fire','Fire'], damage:200, effect:'This Cubaro cannot attack next turn' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:3,
    rarity:'Legendary', set:'Genesis', cardNumber:'004/240',
    artVariant:'EX', emoji:'🌋', isEX:true
  },
  {
    id:'CUBFIREFA001', name:'Embercub', type:'Cubaro Creature',
    stage:'Base', element:'Fire', evolvesFrom:null,
    hp:70, maxHp:70,
    attacks:[
      { name:'Ember Bite', cost:['Fire'], damage:30, effect:'10% chance to inflict Burn' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:1,
    rarity:'Full Art', set:'Genesis', cardNumber:'005/240',
    artVariant:'Full Art', emoji:'🔥'
  },

  // ════════════════════════════════
  // WATER LINE
  // ════════════════════════════════
  {
    id:'CUBWATER001', name:'Bubblecub', type:'Cubaro Creature',
    stage:'Base', element:'Water', evolvesFrom:null,
    hp:70, maxHp:70,
    attacks:[
      { name:'Bubble Shot', cost:['Water'], damage:20, effect:'Heal 10 HP' },
      { name:'Splash', cost:['Water','Water'], damage:40, effect:'' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'006/240',
    artVariant:'Standard', emoji:'💧'
  },
  {
    id:'CUBWATER002', name:'Aquapaw', type:'Cubaro Creature',
    stage:'Stage 1', element:'Water', evolvesFrom:'Bubblecub',
    hp:100, maxHp:100,
    attacks:[
      { name:'Tidal Paw', cost:['Water','Water'], damage:60, effect:'' },
      { name:'Ice Needle', cost:['Water','Water','Water'], damage:80, effect:'Inflict Freeze' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:2,
    rarity:'Uncommon', set:'Genesis', cardNumber:'007/240',
    artVariant:'Standard', emoji:'🐠'
  },
  {
    id:'CUBWATER003', name:'Tidalhorn', type:'Cubaro Creature',
    stage:'Stage 2', element:'Water', evolvesFrom:'Aquapaw',
    hp:160, maxHp:160,
    attacks:[
      { name:'Tidal Wave', cost:['Water','Water','Water'], damage:110, effect:'Heal 30 HP' },
      { name:'Deep Surge', cost:['Water','Water','Water','Water'], damage:170, effect:'Inflict Freeze on active enemy' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:3,
    rarity:'Rare', set:'Genesis', cardNumber:'008/240',
    artVariant:'Standard', emoji:'🐋'
  },
  {
    id:'CUBWATEREX001', name:'Tidalhorn EX', type:'Cubaro Creature',
    stage:'Base', element:'Water', evolvesFrom:null,
    hp:210, maxHp:210,
    attacks:[
      { name:'Cryo Blast', cost:['Water','Water'], damage:90, effect:'Inflict Freeze' },
      { name:'Abyssal Wave', cost:['Water','Water','Water'], damage:190, effect:'Heal 40 HP' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:3,
    rarity:'Legendary', set:'Genesis', cardNumber:'009/240',
    artVariant:'EX', emoji:'🌊', isEX:true
  },

  // ════════════════════════════════
  // NATURE LINE
  // ════════════════════════════════
  {
    id:'CUBNATURE001', name:'Leafling', type:'Cubaro Creature',
    stage:'Base', element:'Nature', evolvesFrom:null,
    hp:60, maxHp:60,
    attacks:[
      { name:'Vine Whip', cost:['Nature'], damage:20, effect:'' },
      { name:'Leaf Blade', cost:['Nature','Nature'], damage:40, effect:'Heal 10 HP' }
    ],
    weakness:'Fire', resistance:'Earth', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'010/240',
    artVariant:'Standard', emoji:'🌱'
  },
  {
    id:'CUBNATURE002', name:'Mossmane', type:'Cubaro Creature',
    stage:'Stage 1', element:'Nature', evolvesFrom:'Leafling',
    hp:90, maxHp:90,
    attacks:[
      { name:'Thorn Slash', cost:['Nature','Nature'], damage:55, effect:'' },
      { name:'Poison Spore', cost:['Nature','Nature','Nature'], damage:70, effect:'Inflict Poison' }
    ],
    weakness:'Fire', resistance:'Earth', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'011/240',
    artVariant:'Standard', emoji:'🌿'
  },
  {
    id:'CUBNATURE003', name:'Elderbloom', type:'Cubaro Creature',
    stage:'Stage 2', element:'Nature', evolvesFrom:'Mossmane',
    hp:150, maxHp:150,
    attacks:[
      { name:'Ancient Growth', cost:['Nature','Nature','Nature'], damage:100, effect:'Heal 40 HP' },
      { name:'World Tree', cost:['Nature','Nature','Nature','Nature'], damage:160, effect:'Heal all own Cubaros 20 HP' }
    ],
    weakness:'Fire', resistance:'Earth', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'012/240',
    artVariant:'Standard', emoji:'🌳'
  },
  {
    id:'CUBNATUREEX001', name:'Elderbloom EX', type:'Cubaro Creature',
    stage:'Base', element:'Nature', evolvesFrom:null,
    hp:190, maxHp:190,
    attacks:[
      { name:'Bloom Shield', cost:['Nature','Nature'], damage:70, effect:'Gain Shield status' },
      { name:'Genesis Bloom', cost:['Nature','Nature','Nature'], damage:170, effect:'Heal 50 HP, Inflict Poison on enemy' }
    ],
    weakness:'Fire', resistance:'Earth', retreatCost:2,
    rarity:'Legendary', set:'Genesis', cardNumber:'013/240',
    artVariant:'EX', emoji:'🌺', isEX:true
  },

  // ════════════════════════════════
  // STORM LINE
  // ════════════════════════════════
  {
    id:'CUBSTORM001', name:'Sparkit', type:'Cubaro Creature',
    stage:'Base', element:'Storm', evolvesFrom:null,
    hp:60, maxHp:60,
    attacks:[
      { name:'Static Shock', cost:['Storm'], damage:20, effect:'10% Stun' },
      { name:'Volt Bite', cost:['Storm','Storm'], damage:40, effect:'' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'014/240',
    artVariant:'Standard', emoji:'⚡'
  },
  {
    id:'CUBSTORM002', name:'Voltaro', type:'Cubaro Creature',
    stage:'Stage 1', element:'Storm', evolvesFrom:'Sparkit',
    hp:90, maxHp:90,
    attacks:[
      { name:'Thunder Fang', cost:['Storm','Storm'], damage:60, effect:'Inflict Stun' },
      { name:'Plasma Rush', cost:['Storm','Storm','Storm'], damage:90, effect:'' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'015/240',
    artVariant:'Standard', emoji:'🌩️'
  },
  {
    id:'CUBSTORM003', name:'Thundrix', type:'Cubaro Creature',
    stage:'Stage 2', element:'Storm', evolvesFrom:'Voltaro',
    hp:150, maxHp:150,
    attacks:[
      { name:'Storm Cannon', cost:['Storm','Storm','Storm'], damage:120, effect:'Inflict Stun' },
      { name:'Thunderclap', cost:['Storm','Storm','Storm','Storm'], damage:180, effect:'Damage all bench enemies 20' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'016/240',
    artVariant:'Standard', emoji:'🌪️'
  },
  {
    id:'CUBSTORMEX001', name:'Thundrix EX', type:'Cubaro Creature',
    stage:'Base', element:'Storm', evolvesFrom:null,
    hp:200, maxHp:200,
    attacks:[
      { name:'Lightning Lance', cost:['Storm','Storm'], damage:100, effect:'Inflict Stun' },
      { name:'Skybreaker', cost:['Storm','Storm','Storm'], damage:200, effect:'Discard 2 Storm energy' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:2,
    rarity:'Legendary', set:'Genesis', cardNumber:'017/240',
    artVariant:'EX', emoji:'🌩️', isEX:true
  },

  // ════════════════════════════════
  // SHADOW LINE
  // ════════════════════════════════
  {
    id:'CUBSHADOW001', name:'Shadecub', type:'Cubaro Creature',
    stage:'Base', element:'Shadow', evolvesFrom:null,
    hp:70, maxHp:70,
    attacks:[
      { name:'Shadow Bite', cost:['Shadow'], damage:30, effect:'' },
      { name:'Dark Pulse', cost:['Shadow','Shadow'], damage:50, effect:'Inflict Poison' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'018/240',
    artVariant:'Standard', emoji:'🌑'
  },
  {
    id:'CUBSHADOW002', name:'Noctipaw', type:'Cubaro Creature',
    stage:'Stage 1', element:'Shadow', evolvesFrom:'Shadecub',
    hp:100, maxHp:100,
    attacks:[
      { name:'Void Claw', cost:['Shadow','Shadow'], damage:65, effect:'' },
      { name:'Night Terror', cost:['Shadow','Shadow','Shadow'], damage:90, effect:'Inflict Poison and Stun' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'019/240',
    artVariant:'Standard', emoji:'🦇'
  },
  {
    id:'CUBSHADOW003', name:'Abyssroar', type:'Cubaro Creature',
    stage:'Stage 2', element:'Shadow', evolvesFrom:'Noctipaw',
    hp:160, maxHp:160,
    attacks:[
      { name:'Abyss Howl', cost:['Shadow','Shadow','Shadow'], damage:120, effect:'Inflict Poison' },
      { name:'Void Devour', cost:['Shadow','Shadow','Shadow','Shadow'], damage:170, effect:'Steal 20 HP from enemy' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'020/240',
    artVariant:'Standard', emoji:'🌑'
  },
  {
    id:'CUBSHADOWEX001', name:'Abyssroar EX', type:'Cubaro Creature',
    stage:'Base', element:'Shadow', evolvesFrom:null,
    hp:210, maxHp:210,
    attacks:[
      { name:'Dark Rend', cost:['Shadow','Shadow'], damage:100, effect:'Inflict Poison' },
      { name:'Eternal Darkness', cost:['Shadow','Shadow','Shadow'], damage:190, effect:'Inflict Poison and Burn' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:3,
    rarity:'Legendary', set:'Genesis', cardNumber:'021/240',
    artVariant:'EX', emoji:'👁️', isEX:true
  },

  // ════════════════════════════════
  // LIGHT LINE
  // ════════════════════════════════
  {
    id:'CUBLIGHT001', name:'Lumicub', type:'Cubaro Creature',
    stage:'Base', element:'Light', evolvesFrom:null,
    hp:70, maxHp:70,
    attacks:[
      { name:'Radiant Touch', cost:['Light'], damage:20, effect:'Heal 10 HP' },
      { name:'Flash Burst', cost:['Light','Light'], damage:40, effect:'' }
    ],
    weakness:'Shadow', resistance:'Storm', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'022/240',
    artVariant:'Standard', emoji:'✨'
  },
  {
    id:'CUBLIGHT002', name:'Solapaw', type:'Cubaro Creature',
    stage:'Stage 1', element:'Light', evolvesFrom:'Lumicub',
    hp:100, maxHp:100,
    attacks:[
      { name:'Solar Paw', cost:['Light','Light'], damage:60, effect:'Heal 20 HP' },
      { name:'Dawnbreaker', cost:['Light','Light','Light'], damage:90, effect:'Heal all own Cubaros 10 HP' }
    ],
    weakness:'Shadow', resistance:'Storm', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'023/240',
    artVariant:'Standard', emoji:'🌟'
  },
  {
    id:'CUBLIGHT003', name:'Auraking', type:'Cubaro Creature',
    stage:'Stage 2', element:'Light', evolvesFrom:'Solapaw',
    hp:160, maxHp:160,
    attacks:[
      { name:'Golden Aura', cost:['Light','Light','Light'], damage:100, effect:'Heal 40 HP, remove all status effects' },
      { name:'Celestial Beam', cost:['Light','Light','Light','Light'], damage:180, effect:'Remove Shield from enemy' }
    ],
    weakness:'Shadow', resistance:'Storm', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'024/240',
    artVariant:'Standard', emoji:'👑'
  },
  {
    id:'CUBLIGHTEX001', name:'Auraking EX', type:'Cubaro Creature',
    stage:'Base', element:'Light', evolvesFrom:null,
    hp:200, maxHp:200,
    attacks:[
      { name:'Holy Blaze', cost:['Light','Light'], damage:90, effect:'Heal 30 HP' },
      { name:'Divine Judgement', cost:['Light','Light','Light'], damage:200, effect:'Remove all status from own Cubaros' }
    ],
    weakness:'Shadow', resistance:'Storm', retreatCost:2,
    rarity:'Legendary', set:'Genesis', cardNumber:'025/240',
    artVariant:'EX', emoji:'🌠', isEX:true
  },

  // ════════════════════════════════
  // METAL LINE
  // ════════════════════════════════
  {
    id:'CUBMETAL001', name:'Gearcub', type:'Cubaro Creature',
    stage:'Base', element:'Metal', evolvesFrom:null,
    hp:80, maxHp:80,
    attacks:[
      { name:'Gear Strike', cost:['Metal'], damage:30, effect:'' },
      { name:'Iron Clamp', cost:['Metal','Metal'], damage:50, effect:'Inflict Stun' }
    ],
    weakness:'Fire', resistance:'Nature', retreatCost:2,
    rarity:'Common', set:'Genesis', cardNumber:'026/240',
    artVariant:'Standard', emoji:'⚙️'
  },
  {
    id:'CUBMETAL002', name:'Ironpaw', type:'Cubaro Creature',
    stage:'Stage 1', element:'Metal', evolvesFrom:'Gearcub',
    hp:120, maxHp:120,
    attacks:[
      { name:'Steel Fang', cost:['Metal','Metal'], damage:65, effect:'Reduce incoming damage by 10 this turn' },
      { name:'Drill Rush', cost:['Metal','Metal','Metal'], damage:95, effect:'' }
    ],
    weakness:'Fire', resistance:'Nature', retreatCost:2,
    rarity:'Uncommon', set:'Genesis', cardNumber:'027/240',
    artVariant:'Standard', emoji:'🔩'
  },
  {
    id:'CUBMETAL003', name:'Mechara', type:'Cubaro Creature',
    stage:'Stage 2', element:'Metal', evolvesFrom:'Ironpaw',
    hp:180, maxHp:180,
    attacks:[
      { name:'Mech Cannon', cost:['Metal','Metal','Metal'], damage:130, effect:'Gain Shield' },
      { name:'Titan Smash', cost:['Metal','Metal','Metal','Metal'], damage:190, effect:'Ignores Shield' }
    ],
    weakness:'Fire', resistance:'Nature', retreatCost:4,
    rarity:'Rare', set:'Genesis', cardNumber:'028/240',
    artVariant:'Standard', emoji:'🤖'
  },
  {
    id:'CUBMETALEX001', name:'Mechara EX', type:'Cubaro Creature',
    stage:'Base', element:'Metal', evolvesFrom:null,
    hp:230, maxHp:230,
    attacks:[
      { name:'Overdrive', cost:['Metal','Metal'], damage:100, effect:'Gain Shield' },
      { name:'Fortress Crush', cost:['Metal','Metal','Metal'], damage:210, effect:'Inflict Stun' }
    ],
    weakness:'Fire', resistance:'Nature', retreatCost:4,
    rarity:'Legendary', set:'Genesis', cardNumber:'029/240',
    artVariant:'EX', emoji:'🦾', isEX:true
  },

  // ════════════════════════════════
  // ARCANE LINE
  // ════════════════════════════════
  {
    id:'CUBARCANE001', name:'Runicub', type:'Cubaro Creature',
    stage:'Base', element:'Arcane', evolvesFrom:null,
    hp:60, maxHp:60,
    attacks:[
      { name:'Rune Spark', cost:['Arcane'], damage:25, effect:'Draw 1 card' },
      { name:'Mystic Bolt', cost:['Arcane','Arcane'], damage:45, effect:'' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'030/240',
    artVariant:'Standard', emoji:'🔮'
  },
  {
    id:'CUBARCANE002', name:'Mystipaw', type:'Cubaro Creature',
    stage:'Stage 1', element:'Arcane', evolvesFrom:'Runicub',
    hp:90, maxHp:90,
    attacks:[
      { name:'Arcane Slash', cost:['Arcane','Arcane'], damage:60, effect:'Draw 1 card' },
      { name:'Spell Surge', cost:['Arcane','Arcane','Arcane'], damage:90, effect:'Draw 2 cards' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'031/240',
    artVariant:'Standard', emoji:'🌀'
  },
  {
    id:'CUBARCANE003', name:'Arcanova', type:'Cubaro Creature',
    stage:'Stage 2', element:'Arcane', evolvesFrom:'Mystipaw',
    hp:150, maxHp:150,
    attacks:[
      { name:'Nova Blast', cost:['Arcane','Arcane','Arcane'], damage:120, effect:'Draw 2 cards' },
      { name:'Reality Tear', cost:['Arcane','Arcane','Arcane','Arcane'], damage:180, effect:'Enemy cannot use Items next turn' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'032/240',
    artVariant:'Standard', emoji:'💜'
  },
  {
    id:'CUBARCANEEX001', name:'Arcanova EX', type:'Cubaro Creature',
    stage:'Base', element:'Arcane', evolvesFrom:null,
    hp:190, maxHp:190,
    attacks:[
      { name:'Void Gate', cost:['Arcane','Arcane'], damage:90, effect:'Draw 2 cards' },
      { name:'Omnispell', cost:['Arcane','Arcane','Arcane'], damage:200, effect:'Random status effect on enemy' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:2,
    rarity:'Legendary', set:'Genesis', cardNumber:'033/240',
    artVariant:'EX', emoji:'🔯', isEX:true
  },

  // ════════════════════════════════
  // EARTH LINE
  // ════════════════════════════════
  {
    id:'CUBEARTH001', name:'Terracub', type:'Cubaro Creature',
    stage:'Base', element:'Earth', evolvesFrom:null,
    hp:80, maxHp:80,
    attacks:[
      { name:'Rock Toss', cost:['Earth'], damage:30, effect:'' },
      { name:'Ground Slam', cost:['Earth','Earth'], damage:55, effect:'' }
    ],
    weakness:'Water', resistance:'Storm', retreatCost:2,
    rarity:'Common', set:'Genesis', cardNumber:'034/240',
    artVariant:'Standard', emoji:'🪨'
  },
  {
    id:'CUBEARTH002', name:'Boulderback', type:'Cubaro Creature',
    stage:'Stage 1', element:'Earth', evolvesFrom:'Terracub',
    hp:120, maxHp:120,
    attacks:[
      { name:'Boulder Crash', cost:['Earth','Earth'], damage:70, effect:'Gain Shield' },
      { name:'Quake Stomp', cost:['Earth','Earth','Earth'], damage:100, effect:'Damage all bench 10' }
    ],
    weakness:'Water', resistance:'Storm', retreatCost:3,
    rarity:'Uncommon', set:'Genesis', cardNumber:'035/240',
    artVariant:'Standard', emoji:'🏔️'
  },
  {
    id:'CUBEARTH003', name:'Terrakon', type:'Cubaro Creature',
    stage:'Stage 2', element:'Earth', evolvesFrom:'Boulderback',
    hp:180, maxHp:180,
    attacks:[
      { name:'Mountain Crush', cost:['Earth','Earth','Earth'], damage:130, effect:'Gain Shield' },
      { name:'Tectonic Wrath', cost:['Earth','Earth','Earth','Earth'], damage:190, effect:'Damage all bench 20, Inflict Stun' }
    ],
    weakness:'Water', resistance:'Storm', retreatCost:4,
    rarity:'Rare', set:'Genesis', cardNumber:'036/240',
    artVariant:'Standard', emoji:'🗿'
  },
  {
    id:'CUBEARTHEX001', name:'Terrakon EX', type:'Cubaro Creature',
    stage:'Base', element:'Earth', evolvesFrom:null,
    hp:240, maxHp:240,
    attacks:[
      { name:'Bedrock Fist', cost:['Earth','Earth'], damage:100, effect:'Gain Shield' },
      { name:'Gaia Smash', cost:['Earth','Earth','Earth'], damage:220, effect:'Inflict Stun on all enemies' }
    ],
    weakness:'Water', resistance:'Storm', retreatCost:4,
    rarity:'Legendary', set:'Genesis', cardNumber:'037/240',
    artVariant:'EX', emoji:'⛰️', isEX:true
  },

  // ════════════════════════════════
  // ASCENDED / SPECIAL CUBAROS
  // ════════════════════════════════
  {
    id:'CUBASC001', name:'Solarius', type:'Cubaro Creature',
    stage:'Base', element:'Light', evolvesFrom:null,
    hp:180, maxHp:180,
    attacks:[
      { name:'Solar Pulse', cost:['Light','Light'], damage:90, effect:'Heal 30 HP' },
      { name:'Ascended Beam', cost:['Light','Light','Light'], damage:160, effect:'Heal 50 HP, remove all status' }
    ],
    weakness:'Shadow', resistance:'Arcane', retreatCost:2,
    rarity:'Epic', set:'Genesis', cardNumber:'038/240',
    artVariant:'Ascended', emoji:'🌞', isAscended:true
  },
  {
    id:'CUBASC002', name:'Voidlord', type:'Cubaro Creature',
    stage:'Base', element:'Shadow', evolvesFrom:null,
    hp:180, maxHp:180,
    attacks:[
      { name:'Void Crush', cost:['Shadow','Shadow'], damage:100, effect:'Inflict Poison and Freeze' },
      { name:'Null Zone', cost:['Shadow','Shadow','Shadow'], damage:170, effect:'Enemy Support Cards inactive next turn' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:2,
    rarity:'Epic', set:'Genesis', cardNumber:'039/240',
    artVariant:'Ascended', emoji:'👁️', isAscended:true
  },
  {
    id:'CUBASC003', name:'Pyrodrake', type:'Cubaro Creature',
    stage:'Base', element:'Fire', evolvesFrom:null,
    hp:190, maxHp:190,
    attacks:[
      { name:'Dragon Fire', cost:['Fire','Fire'], damage:110, effect:'Inflict Burn' },
      { name:'Infernal Wing', cost:['Fire','Fire','Fire'], damage:180, effect:'Burn all bench enemies' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:3,
    rarity:'Epic', set:'Genesis', cardNumber:'040/240',
    artVariant:'Ascended', emoji:'🐉', isAscended:true
  },
  {
    id:'CUBASC004', name:'Crystalhorn', type:'Cubaro Creature',
    stage:'Base', element:'Arcane', evolvesFrom:null,
    hp:170, maxHp:170,
    attacks:[
      { name:'Crystal Spike', cost:['Arcane','Arcane'], damage:100, effect:'Draw 2 cards' },
      { name:'Prismatic Beam', cost:['Arcane','Arcane','Arcane'], damage:170, effect:'Random element weakness applied' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:2,
    rarity:'Epic', set:'Genesis', cardNumber:'041/240',
    artVariant:'Ascended', emoji:'💎', isAscended:true
  },
  {
    id:'CUBASC005', name:'Stormwing', type:'Cubaro Creature',
    stage:'Base', element:'Storm', evolvesFrom:null,
    hp:160, maxHp:160,
    attacks:[
      { name:'Wing Thunder', cost:['Storm','Storm'], damage:100, effect:'Inflict Stun' },
      { name:'Cyclone Strike', cost:['Storm','Storm','Storm'], damage:170, effect:'Shuffle enemy hand, they draw 3' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:2,
    rarity:'Epic', set:'Genesis', cardNumber:'042/240',
    artVariant:'Ascended', emoji:'🦅', isAscended:true
  },

  // ════════════════════════════════
  // GOLD & CELESTIAL VARIANTS
  // ════════════════════════════════
  {
    id:'CUBGOLD001', name:'Blazeroar', type:'Cubaro Creature',
    stage:'Stage 2', element:'Fire', evolvesFrom:'Flarepaws',
    hp:160, maxHp:160,
    attacks:[
      { name:'Inferno Roar', cost:['Fire','Fire','Fire'], damage:120, effect:'Inflict Burn on all bench' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:3,
    rarity:'Gold', set:'Genesis', cardNumber:'043/240',
    artVariant:'Gold', emoji:'🔥'
  },
  {
    id:'CUBCELES001', name:'Cosmicara', type:'Cubaro Creature',
    stage:'Base', element:'Arcane', evolvesFrom:null,
    hp:200, maxHp:200,
    attacks:[
      { name:'Star Fall', cost:['Arcane','Arcane'], damage:110, effect:'Draw 2 cards, heal 20 HP' },
      { name:'Cosmic Rend', cost:['Arcane','Arcane','Arcane'], damage:210, effect:'Deals double damage to EX Cubaros' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:2,
    rarity:'Celestial', set:'Genesis', cardNumber:'044/240',
    artVariant:'Celestial', emoji:'🌌', isAscended:true
  },
  {
    id:'CUBCELES002', name:'Eternithorn', type:'Cubaro Creature',
    stage:'Base', element:'Light', evolvesFrom:null,
    hp:210, maxHp:210,
    attacks:[
      { name:'Eternity Flash', cost:['Light','Light'], damage:120, effect:'Heal 40 HP' },
      { name:'Time Stop', cost:['Light','Light','Light'], damage:200, effect:'Enemy skips next turn' }
    ],
    weakness:'Shadow', resistance:'Storm', retreatCost:2,
    rarity:'Celestial', set:'Genesis', cardNumber:'045/240',
    artVariant:'Celestial', emoji:'⏳', isAscended:true
  },
  
  // ════════════════════════════════
  // ITEM CARDS (Fortsetzung)
  // ════════════════════════════════
  {
    id:'ITEM001', name:'Cubaro Potion', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Heal 30 HP from your active Cubaro',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Common', set:'Genesis', cardNumber:'046/240',
    artVariant:'Standard', emoji:'🧪'
  },
  {
    id:'ITEM002', name:'Energy Shift', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Move 1 Energy from your bench Cubaro to your active Cubaro',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Common', set:'Genesis', cardNumber:'047/240',
    artVariant:'Standard', emoji:'🔀'
  },
  {
    id:'ITEM003', name:'Quick Recall', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Switch your active Cubaro with one from your bench for free',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'048/240',
    artVariant:'Standard', emoji:'🔄'
  },
  {
    id:'ITEM004', name:'Crystal Compass', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Draw 2 cards from your deck',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'049/240',
    artVariant:'Standard', emoji:'🧭'
  },
  {
    id:'ITEM005', name:'Shield Pulse', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Reduce the next attack your active Cubaro receives by 20 damage',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'050/240',
    artVariant:'Standard', emoji:'🛡️'
  },
  {
    id:'ITEM006', name:'Echo Scanner', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Search your deck for 1 Base Cubaro and put it on your bench',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'051/240',
    artVariant:'Standard', emoji:'📡'
  },
  {
    id:'ITEM007', name:'Battle Snack', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Heal 10 HP from your active Cubaro and draw 1 card',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Common', set:'Genesis', cardNumber:'052/240',
    artVariant:'Standard', emoji:'🍖'
  },
  {
    id:'ITEM008', name:'Pack Finder', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Draw 1 card. If it is a Cubaro Creature, you may play it to your bench immediately',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'053/240',
    artVariant:'Standard', emoji:'🔍'
  },
  {
    id:'ITEM009', name:'Bench Switch', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Swap the positions of any 2 Cubaros on your bench',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Common', set:'Genesis', cardNumber:'054/240',
    artVariant:'Standard', emoji:'🔃'
  },
  {
    id:'ITEM010', name:'Lucky Draw', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Draw 3 cards, then discard 1 card of your choice',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'055/240',
    artVariant:'Standard', emoji:'🎲'
  },
  {
    id:'ITEM011', name:'Mega Potion', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Heal 60 HP from your active Cubaro',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'056/240',
    artVariant:'Standard', emoji:'💊'
  },
  {
    id:'ITEM012', name:'Revive Shard', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Return 1 knocked out Cubaro from your discard pile to bench with 30 HP',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Epic', set:'Genesis', cardNumber:'057/240',
    artVariant:'Standard', emoji:'💫'
  },
  {
    id:'ITEM013', name:'Energy Capsule', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Attach 1 extra Energy card from your hand to your active Cubaro this turn',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'058/240',
    artVariant:'Standard', emoji:'⚡'
  },
  {
    id:'ITEM014', name:'Smoke Bomb', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Retreat your active Cubaro for free this turn',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'059/240',
    artVariant:'Standard', emoji:'💨'
  },
  {
    id:'ITEM015', name:'Full Restore', type:'Item',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Heal 30 HP and remove all status effects from your active Cubaro',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'060/240',
    artVariant:'Standard', emoji:'✨'
  },

  // ════════════════════════════════
  // SUPPORT CARDS
  // ════════════════════════════════
  {
    id:'SUP001', name:'Cubaro Trainer', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Draw 3 cards from your deck. (Only 1 Support per turn)',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Common', set:'Genesis', cardNumber:'061/240',
    artVariant:'Standard', emoji:'👨‍🏫'
  },
  {
    id:'SUP002', name:'Battle Mentor', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Your active Cubaro deals +20 damage this turn',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'062/240',
    artVariant:'Standard', emoji:'⚔️'
  },
  {
    id:'SUP003', name:'Arcane Researcher', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Search your deck for 1 Stage 1 or Stage 2 Cubaro and add it to your hand',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'063/240',
    artVariant:'Standard', emoji:'🔬'
  },
  {
    id:'SUP004', name:'Arena Captain', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Heal 10 HP from each of your Cubaros',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'064/240',
    artVariant:'Standard', emoji:'🏆'
  },
  {
    id:'SUP005', name:'Shadow Merchant', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Discard 1 card from your hand, then draw 3 cards',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'065/240',
    artVariant:'Standard', emoji:'🕵️'
  },
  {
    id:'SUP006', name:'Elemental Scholar', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Search your deck for any 1 Energy card and add it to your hand',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Common', set:'Genesis', cardNumber:'066/240',
    artVariant:'Standard', emoji:'📚'
  },
  {
    id:'SUP007', name:'World Guide', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Remove all status effects from your active Cubaro',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'067/240',
    artVariant:'Standard', emoji:'🗺️'
  },
  {
    id:'SUP008', name:'Card Master', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Draw 2 cards and reduce your active Cubaro retreat cost by 1 this turn',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'068/240',
    artVariant:'Standard', emoji:'🃏'
  },
  {
    id:'SUP009', name:'Crystal Sage', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'Search your deck for any 1 card and add it to your hand. Shuffle your deck',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Epic', set:'Genesis', cardNumber:'069/240',
    artVariant:'Standard', emoji:'🧙'
  },
  {
    id:'SUP010', name:'Rally Cry', type:'Support',
    stage:null, element:null, evolvesFrom:null, hp:0, maxHp:0,
    effect:'All your bench Cubaros gain Shield status',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'070/240',
    artVariant:'Standard', emoji:'📣'
  },

  // ════════════════════════════════
  // SPECIAL ENERGY CARDS
  // ════════════════════════════════
  {
    id:'NRGY001', name:'Wild Core', type:'Special Energy',
    stage:null, element:'Any', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as any 1 element Energy',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'071/240',
    artVariant:'Standard', emoji:'🌈'
  },
  {
    id:'NRGY002', name:'Twin Spark', type:'Special Energy',
    stage:null, element:'Storm', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 2 Storm Energy. Can only be attached to Storm Cubaros',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'072/240',
    artVariant:'Standard', emoji:'⚡'
  },
  {
    id:'NRGY003', name:'Healing Pulse', type:'Special Energy',
    stage:null, element:'Any', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 1 Energy. Heal 10 HP from the attached Cubaro when played',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'073/240',
    artVariant:'Standard', emoji:'💚'
  },
  {
    id:'NRGY004', name:'Heavy Core', type:'Special Energy',
    stage:null, element:'Metal', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 1 Metal Energy. Reduces incoming damage by 10 while attached',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'074/240',
    artVariant:'Standard', emoji:'🔩'
  },
  {
    id:'NRGY005', name:'Crystal Charge', type:'Special Energy',
    stage:null, element:'Any', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 1 Any Energy. Attached Cubaro deals +10 damage',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'075/240',
    artVariant:'Standard', emoji:'💎'
  },
  {
    id:'NRGY006', name:'Time Boost', type:'Special Energy',
    stage:null, element:'Any', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 1 Any Energy. Reduces retreat cost by 1 while attached',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Uncommon', set:'Genesis', cardNumber:'076/240',
    artVariant:'Standard', emoji:'⏱️'
  },
  {
    id:'NRGY007', name:'Blaze Core', type:'Special Energy',
    stage:null, element:'Fire', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 2 Fire Energy. Can only be attached to Fire Cubaros',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'077/240',
    artVariant:'Standard', emoji:'🔥'
  },
  {
    id:'NRGY008', name:'Tidal Core', type:'Special Energy',
    stage:null, element:'Water', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 2 Water Energy. Heal 10 HP when attached to Water Cubaros',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'078/240',
    artVariant:'Standard', emoji:'💧'
  },
  {
    id:'NRGY009', name:'Shadow Core', type:'Special Energy',
    stage:null, element:'Shadow', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 2 Shadow Energy. Inflict Poison on attacker once per turn',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'079/240',
    artVariant:'Standard', emoji:'🌑'
  },
  {
    id:'NRGY010', name:'Nature Core', type:'Special Energy',
    stage:null, element:'Nature', evolvesFrom:null, hp:0, maxHp:0,
    effect:'Counts as 2 Nature Energy. Heal 20 HP when attached to Nature Cubaros',
    attacks:[], weakness:null, resistance:null, retreatCost:0,
    rarity:'Rare', set:'Genesis', cardNumber:'080/240',
    artVariant:'Standard', emoji:'🌿'
  },

  // ════════════════════════════════
  // BASIC ENERGY CARDS
  // ════════════════════════════════
  { id:'ENGYFIRE',   name:'Fire Energy',   type:'Special Energy', stage:null, element:'Fire',   evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Fire Energy',   attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'081/240', artVariant:'Standard', emoji:'🔥' },
  { id:'ENGYWATER',  name:'Water Energy',  type:'Special Energy', stage:null, element:'Water',  evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Water Energy',  attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'082/240', artVariant:'Standard', emoji:'💧' },
  { id:'ENGYNATURE', name:'Nature Energy', type:'Special Energy', stage:null, element:'Nature', evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Nature Energy', attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'083/240', artVariant:'Standard', emoji:'🌿' },
  { id:'ENGYEARTH',  name:'Earth Energy',  type:'Special Energy', stage:null, element:'Earth',  evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Earth Energy',  attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'084/240', artVariant:'Standard', emoji:'🪨' },
  { id:'ENGYSTORM',  name:'Storm Energy',  type:'Special Energy', stage:null, element:'Storm',  evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Storm Energy',  attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'085/240', artVariant:'Standard', emoji:'⚡' },
  { id:'ENGYMETAL',  name:'Metal Energy',  type:'Special Energy', stage:null, element:'Metal',  evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Metal Energy',  attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'086/240', artVariant:'Standard', emoji:'⚙️' },
  { id:'ENGYLIGHT',  name:'Light Energy',  type:'Special Energy', stage:null, element:'Light',  evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Light Energy',  attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'087/240', artVariant:'Standard', emoji:'✨' },
  { id:'ENGYSHADOW', name:'Shadow Energy', type:'Special Energy', stage:null, element:'Shadow', evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Shadow Energy', attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'088/240', artVariant:'Standard', emoji:'🌑' },
  { id:'ENGYARCANE', name:'Arcane Energy', type:'Special Energy', stage:null, element:'Arcane', evolvesFrom:null, hp:0, maxHp:0, effect:'Provides 1 Arcane Energy', attacks:[], weakness:null, resistance:null, retreatCost:0, rarity:'Common', set:'Genesis', cardNumber:'089/240', artVariant:'Standard', emoji:'🔮' },

  // ════════════════════════════════
  // EXTRA CUBAROS (Solo / Rare)
  // ════════════════════════════════
  {
    id:'CUBEXTRA001', name:'Glaciapaw', type:'Cubaro Creature',
    stage:'Base', element:'Water', evolvesFrom:null,
    hp:80, maxHp:80,
    attacks:[
      { name:'Ice Claw', cost:['Water'], damage:30, effect:'Inflict Freeze' },
      { name:'Blizzard', cost:['Water','Water','Water'], damage:80, effect:'Inflict Freeze on all enemies' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'090/240',
    artVariant:'Standard', emoji:'🧊'
  },
  {
    id:'CUBEXTRA002', name:'Magmapaw', type:'Cubaro Creature',
    stage:'Base', element:'Fire', evolvesFrom:null,
    hp:80, maxHp:80,
    attacks:[
      { name:'Lava Spit', cost:['Fire'], damage:30, effect:'Inflict Burn' },
      { name:'Magma Burst', cost:['Fire','Fire','Fire'], damage:90, effect:'Inflict Burn on all bench' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'091/240',
    artVariant:'Standard', emoji:'🌋'
  },
  {
    id:'CUBEXTRA003', name:'Thornback', type:'Cubaro Creature',
    stage:'Base', element:'Nature', evolvesFrom:null,
    hp:90, maxHp:90,
    attacks:[
      { name:'Thorn Shield', cost:['Nature'], damage:20, effect:'Gain Shield, Inflict Poison on attacker' },
      { name:'Bramble Rush', cost:['Nature','Nature'], damage:60, effect:'Inflict Poison' }
    ],
    weakness:'Fire', resistance:'Earth', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'092/240',
    artVariant:'Standard', emoji:'🌵'
  },
  {
    id:'CUBEXTRA004', name:'Stoneclaw', type:'Cubaro Creature',
    stage:'Base', element:'Earth', evolvesFrom:null,
    hp:100, maxHp:100,
    attacks:[
      { name:'Boulder Toss', cost:['Earth'], damage:40, effect:'' },
      { name:'Seismic Slam', cost:['Earth','Earth'], damage:70, effect:'Inflict Stun' }
    ],
    weakness:'Water', resistance:'Storm', retreatCost:3,
    rarity:'Uncommon', set:'Genesis', cardNumber:'093/240',
    artVariant:'Standard', emoji:'🗿'
  },
  {
    id:'CUBEXTRA005', name:'Voltfang', type:'Cubaro Creature',
    stage:'Base', element:'Storm', evolvesFrom:null,
    hp:70, maxHp:70,
    attacks:[
      { name:'Volt Fang', cost:['Storm'], damage:30, effect:'' },
      { name:'Thunder Chain', cost:['Storm','Storm'], damage:60, effect:'Hits bench Cubaro for 20' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'094/240',
    artVariant:'Standard', emoji:'🌩️'
  },
  {
    id:'CUBEXTRA006', name:'Rustclaw', type:'Cubaro Creature',
    stage:'Base', element:'Metal', evolvesFrom:null,
    hp:90, maxHp:90,
    attacks:[
      { name:'Rust Scratch', cost:['Metal'], damage:30, effect:'Reduce enemy attack by 10 next turn' },
      { name:'Scrap Bash', cost:['Metal','Metal'], damage:65, effect:'' }
    ],
    weakness:'Fire', resistance:'Nature', retreatCost:2,
    rarity:'Uncommon', set:'Genesis', cardNumber:'095/240',
    artVariant:'Standard', emoji:'🔧'
  },
  {
    id:'CUBEXTRA007', name:'Glowpup', type:'Cubaro Creature',
    stage:'Base', element:'Light', evolvesFrom:null,
    hp:70, maxHp:70,
    attacks:[
      { name:'Glow Pulse', cost:['Light'], damage:20, effect:'Heal 20 HP' },
      { name:'Bright Beam', cost:['Light','Light'], damage:50, effect:'Remove 1 status effect' }
    ],
    weakness:'Shadow', resistance:'Storm', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'096/240',
    artVariant:'Standard', emoji:'💡'
  },
  {
    id:'CUBEXTRA008', name:'Duskclaw', type:'Cubaro Creature',
    stage:'Base', element:'Shadow', evolvesFrom:null,
    hp:70, maxHp:70,
    attacks:[
      { name:'Dusk Strike', cost:['Shadow'], damage:30, effect:'' },
      { name:'Nightmare', cost:['Shadow','Shadow'], damage:55, effect:'Inflict Poison' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'097/240',
    artVariant:'Standard', emoji:'🌙'
  },
  {
    id:'CUBEXTRA009', name:'Runepup', type:'Cubaro Creature',
    stage:'Base', element:'Arcane', evolvesFrom:null,
    hp:60, maxHp:60,
    attacks:[
      { name:'Rune Pulse', cost:['Arcane'], damage:20, effect:'Draw 1 card' },
      { name:'Arcane Burst', cost:['Arcane','Arcane'], damage:50, effect:'' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'098/240',
    artVariant:'Standard', emoji:'🔯'
  },
  {
    id:'CUBEXTRA010', name:'Frostmane', type:'Cubaro Creature',
    stage:'Stage 1', element:'Water', evolvesFrom:'Glaciapaw',
    hp:130, maxHp:130,
    attacks:[
      { name:'Frost Slash', cost:['Water','Water'], damage:75, effect:'Inflict Freeze' },
      { name:'Absolute Zero', cost:['Water','Water','Water'], damage:120, effect:'Inflict Freeze, enemy cannot retreat' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'099/240',
    artVariant:'Standard', emoji:'❄️'
  },
  {
    id:'CUBEXTRA011', name:'Infernotail', type:'Cubaro Creature',
    stage:'Stage 1', element:'Fire', evolvesFrom:'Magmapaw',
    hp:130, maxHp:130,
    attacks:[
      { name:'Firetail Whip', cost:['Fire','Fire'], damage:80, effect:'Inflict Burn' },
      { name:'Eruption', cost:['Fire','Fire','Fire'], damage:130, effect:'Inflict Burn on all bench' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'100/240',
    artVariant:'Standard', emoji:'🔥'
  },

  // ════════════════════════════════
  // SIGNATURE ART VARIANTS
  // ════════════════════════════════
  {
    id:'CUBSIG001', name:'Blazeroar', type:'Cubaro Creature',
    stage:'Stage 2', element:'Fire', evolvesFrom:'Flarepaws',
    hp:160, maxHp:160,
    attacks:[
      { name:'Inferno Roar', cost:['Fire','Fire','Fire'], damage:120, effect:'Inflict Burn on all bench' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:3,
    rarity:'Full Art', set:'Genesis', cardNumber:'101/240',
    artVariant:'Signature Art', emoji:'🦅'
  },
  {
    id:'CUBSIG002', name:'Tidalhorn', type:'Cubaro Creature',
    stage:'Stage 2', element:'Water', evolvesFrom:'Aquapaw',
    hp:160, maxHp:160,
    attacks:[
      { name:'Tidal Wave', cost:['Water','Water','Water'], damage:110, effect:'Heal 30 HP' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:3,
    rarity:'Full Art', set:'Genesis', cardNumber:'102/240',
    artVariant:'Signature Art', emoji:'🐋'
  },
  {
    id:'CUBSIG003', name:'Thundrix', type:'Cubaro Creature',
    stage:'Stage 2', element:'Storm', evolvesFrom:'Voltaro',
    hp:150, maxHp:150,
    attacks:[
      { name:'Storm Cannon', cost:['Storm','Storm','Storm'], damage:120, effect:'Inflict Stun' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:2,
    rarity:'Full Art', set:'Genesis', cardNumber:'103/240',
    artVariant:'Signature Art', emoji:'🌪️'
  },

  // ════════════════════════════════
  // MORE EXTRA CUBAROS TO REACH 150+
  // ════════════════════════════════
  {
    id:'CUBX001', name:'Cinderpup', type:'Cubaro Creature',
    stage:'Base', element:'Fire', evolvesFrom:null, hp:60, maxHp:60,
    attacks:[{ name:'Cinder Bite', cost:['Fire'], damage:20, effect:'' }],
    weakness:'Water', resistance:'Nature', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'104/240', artVariant:'Standard', emoji:'🐕'
  },
  {
    id:'CUBX002', name:'Ripplefin', type:'Cubaro Creature',
    stage:'Base', element:'Water', evolvesFrom:null, hp:60, maxHp:60,
    attacks:[{ name:'Ripple Fin', cost:['Water'], damage:20, effect:'Heal 10 HP' }],
    weakness:'Storm', resistance:'Fire', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'105/240', artVariant:'Standard', emoji:'🐟'
  },
  {
    id:'CUBX003', name:'Sproutling', type:'Cubaro Creature',
    stage:'Base', element:'Nature', evolvesFrom:null, hp:60, maxHp:60,
    attacks:[{ name:'Seed Shot', cost:['Nature'], damage:20, effect:'' }],
    weakness:'Fire', resistance:'Earth', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'106/240', artVariant:'Standard', emoji:'🌱'
  },
  {
    id:'CUBX004', name:'Pebbleback', type:'Cubaro Creature',
    stage:'Base', element:'Earth', evolvesFrom:null, hp:70, maxHp:70,
    attacks:[{ name:'Pebble Toss', cost:['Earth'], damage:25, effect:'' }],
    weakness:'Water', resistance:'Storm', retreatCost:2,
    rarity:'Common', set:'Genesis', cardNumber:'107/240', artVariant:'Standard', emoji:'🪨'
  },
  {
    id:'CUBX005', name:'Zapkit', type:'Cubaro Creature',
    stage:'Base', element:'Storm', evolvesFrom:null, hp:60, maxHp:60,
    attacks:[{ name:'Zap', cost:['Storm'], damage:20, effect:'10% Stun' }],
    weakness:'Earth', resistance:'Metal', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'108/240', artVariant:'Standard', emoji:'⚡'
  },
  {
    id:'CUBX006', name:'Boltpup', type:'Cubaro Creature',
    stage:'Base', element:'Storm', evolvesFrom:null, hp:60, maxHp:60,
    attacks:[{ name:'Bolt Bite', cost:['Storm'], damage:25, effect:'' }],
    weakness:'Earth', resistance:'Metal', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'109/240', artVariant:'Standard', emoji:'🐾'
  },
  {
    id:'CUBX007', name:'Screwcub', type:'Cubaro Creature',
    stage:'Base', element:'Metal', evolvesFrom:null, hp:70, maxHp:70,
    attacks:[{ name:'Screw Bash', cost:['Metal'], damage:25, effect:'' }],
    weakness:'Fire', resistance:'Nature', retreatCost:2,
    rarity:'Common', set:'Genesis', cardNumber:'110/240', artVariant:'Standard', emoji:'🔩'
  },
  {
    id:'CUBX008', name:'Shimmerkit', type:'Cubaro Creature',
    stage:'Base', element:'Light', evolvesFrom:null, hp:60, maxHp:60,
    attacks:[{ name:'Shimmer', cost:['Light'], damage:15, effect:'Heal 15 HP' }],
    weakness:'Shadow', resistance:'Storm', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'111/240', artVariant:'Standard', emoji:'⭐'
  },
  {
    id:'CUBX009', name:'Murkpup', type:'Cubaro Creature',
    stage:'Base', element:'Shadow', evolvesFrom:null, hp:60, maxHp:60,
    attacks:[{ name:'Murk Bite', cost:['Shadow'], damage:25, effect:'' }],
    weakness:'Light', resistance:'Arcane', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'112/240', artVariant:'Standard', emoji:'🦝'
  },
  {
    id:'CUBX010', name:'Glyphkit', type:'Cubaro Creature',
    stage:'Base', element:'Arcane', evolvesFrom:null, hp:60, maxHp:60,
    attacks:[{ name:'Glyph Strike', cost:['Arcane'], damage:20, effect:'Draw 1 card' }],
    weakness:'Shadow', resistance:'Light', retreatCost:1,
    rarity:'Common', set:'Genesis', cardNumber:'113/240', artVariant:'Standard', emoji:'📜'
  },
  {
    id:'CUBX011', name:'Bouldercub', type:'Cubaro Creature',
    stage:'Base', element:'Earth', evolvesFrom:null, hp:80, maxHp:80,
    attacks:[{ name:'Boulder Drop', cost:['Earth','Earth'], damage:50, effect:'' }],
    weakness:'Water', resistance:'Storm', retreatCost:3,
    rarity:'Uncommon', set:'Genesis', cardNumber:'114/240', artVariant:'Standard', emoji:'🏔️'
  },
  {
    id:'CUBX012', name:'Aquafin', type:'Cubaro Creature',
    stage:'Stage 1', element:'Water', evolvesFrom:'Ripplefin',
    hp:110, maxHp:110,
    attacks:[
      { name:'Aqua Jet', cost:['Water','Water'], damage:65, effect:'' },
      { name:'Hydro Pump', cost:['Water','Water','Water'], damage:95, effect:'Heal 20 HP' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:2,
    rarity:'Uncommon', set:'Genesis', cardNumber:'115/240', artVariant:'Standard', emoji:'🐬'
  },
  {
    id:'CUBX013', name:'Flamepup', type:'Cubaro Creature',
    stage:'Stage 1', element:'Fire', evolvesFrom:'Cinderpup',
    hp:110, maxHp:110,
    attacks:[
      { name:'Flame Dash', cost:['Fire','Fire'], damage:65, effect:'Inflict Burn' },
      { name:'Fire Spin', cost:['Fire','Fire','Fire'], damage:95, effect:'' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:2,
    rarity:'Uncommon', set:'Genesis', cardNumber:'116/240', artVariant:'Standard', emoji:'🐩'
  },
  {
    id:'CUBX014', name:'Vineback', type:'Cubaro Creature',
    stage:'Stage 1', element:'Nature', evolvesFrom:'Sproutling',
    hp:110, maxHp:110,
    attacks:[
      { name:'Vine Lash', cost:['Nature','Nature'], damage:60, effect:'Inflict Poison' },
      { name:'Overgrowth', cost:['Nature','Nature','Nature'], damage:90, effect:'Heal 20 HP' }
    ],
    weakness:'Fire', resistance:'Earth', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'117/240', artVariant:'Standard', emoji:'🌿'
  },
  {
    id:'CUBX015', name:'Galekit', type:'Cubaro Creature',
    stage:'Stage 1', element:'Storm', evolvesFrom:'Zapkit',
    hp:100, maxHp:100,
    attacks:[
      { name:'Gale Strike', cost:['Storm','Storm'], damage:65, effect:'Inflict Stun' },
      { name:'Twister', cost:['Storm','Storm','Storm'], damage:95, effect:'' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'118/240', artVariant:'Standard', emoji:'🌀'
  },
  {
    id:'CUBX016', name:'Steelpaw', type:'Cubaro Creature',
    stage:'Stage 1', element:'Metal', evolvesFrom:'Screwcub',
    hp:130, maxHp:130,
    attacks:[
      { name:'Steel Slash', cost:['Metal','Metal'], damage:70, effect:'Reduce incoming damage by 10' },
      { name:'Iron Cannon', cost:['Metal','Metal','Metal'], damage:100, effect:'' }
    ],
    weakness:'Fire', resistance:'Nature', retreatCost:3,
    rarity:'Uncommon', set:'Genesis', cardNumber:'119/240', artVariant:'Standard', emoji:'🦾'
  },
  {
    id:'CUBX017', name:'Radiantpaw', type:'Cubaro Creature',
    stage:'Stage 1', element:'Light', evolvesFrom:'Shimmerkit',
    hp:110, maxHp:110,
    attacks:[
      { name:'Radiant Slash', cost:['Light','Light'], damage:65, effect:'Heal 20 HP' },
      { name:'Sunbeam', cost:['Light','Light','Light'], damage:95, effect:'Remove 1 status' }
    ],
    weakness:'Shadow', resistance:'Storm', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'120/240', artVariant:'Standard', emoji:'🌟'
  },
 {
    id:'CUB_X_018', name:'Voidpaw', type:'Cubaro Creature',
    stage:'Stage 1', element:'Shadow', evolvesFrom:'Murkpaw',
    hp:110, maxHp:110,
    attacks:[
      { name:'Void Slash', cost:['Shadow','Shadow'], damage:65, effect:'Inflict Poison' },
      { name:'Dark Wave', cost:['Shadow','Shadow','Shadow'], damage:95, effect:'Inflict Stun' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'121/240', artVariant:'Standard', emoji:'🦊'
  },
  {
    id:'CUB_X_019', name:'Runespirit', type:'Cubaro Creature',
    stage:'Stage 1', element:'Arcane', evolvesFrom:'Glyphkit',
    hp:100, maxHp:100,
    attacks:[
      { name:'Rune Blast', cost:['Arcane','Arcane'], damage:60, effect:'Draw 1 card' },
      { name:'Spell Burst', cost:['Arcane','Arcane','Arcane'], damage:90, effect:'Draw 2 cards' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:1,
    rarity:'Uncommon', set:'Genesis', cardNumber:'122/240', artVariant:'Standard', emoji:'🔮'
  },
  {
    id:'CUB_X_020', name:'Graniteclaw', type:'Cubaro Creature',
    stage:'Stage 2', element:'Earth', evolvesFrom:'Boulderback',
    hp:170, maxHp:170,
    attacks:[
      { name:'Granite Crush', cost:['Earth','Earth','Earth'], damage:125, effect:'Gain Shield' },
      { name:'Landslide', cost:['Earth','Earth','Earth','Earth'], damage:185, effect:'Damage all bench 15' }
    ],
    weakness:'Water', resistance:'Storm', retreatCost:4,
    rarity:'Rare', set:'Genesis', cardNumber:'123/240', artVariant:'Standard', emoji:'🗿'
  },
  {
    id:'CUB_X_021', name:'Aquadrake', type:'Cubaro Creature',
    stage:'Stage 2', element:'Water', evolvesFrom:'Aquafin',
    hp:155, maxHp:155,
    attacks:[
      { name:'Hydro Dragon', cost:['Water','Water','Water'], damage:115, effect:'Heal 30 HP' },
      { name:'Tsunami', cost:['Water','Water','Water','Water'], damage:175, effect:'Inflict Freeze on all enemies' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:3,
    rarity:'Rare', set:'Genesis', cardNumber:'124/240', artVariant:'Standard', emoji:'🐲'
  },
  {
    id:'CUB_X_022', name:'Pyrovern', type:'Cubaro Creature',
    stage:'Stage 2', element:'Fire', evolvesFrom:'Flamepup',
    hp:155, maxHp:155,
    attacks:[
      { name:'Fire Dragon', cost:['Fire','Fire','Fire'], damage:115, effect:'Inflict Burn' },
      { name:'Volcanic Surge', cost:['Fire','Fire','Fire','Fire'], damage:175, effect:'Burn all bench enemies' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:3,
    rarity:'Rare', set:'Genesis', cardNumber:'125/240', artVariant:'Standard', emoji:'🐉'
  },
  {
    id:'CUB_X_023', name:'Cycloneback', type:'Cubaro Creature',
    stage:'Stage 2', element:'Storm', evolvesFrom:'Galekit',
    hp:145, maxHp:145,
    attacks:[
      { name:'Cyclone Fang', cost:['Storm','Storm','Storm'], damage:115, effect:'Inflict Stun' },
      { name:'Tempest', cost:['Storm','Storm','Storm','Storm'], damage:175, effect:'Damage all bench 20' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'126/240', artVariant:'Standard', emoji:'🌪️'
  },
  {
    id:'CUB_X_024', name:'Titanforge', type:'Cubaro Creature',
    stage:'Stage 2', element:'Metal', evolvesFrom:'Steelpaw',
    hp:175, maxHp:175,
    attacks:[
      { name:'Forge Blast', cost:['Metal','Metal','Metal'], damage:125, effect:'Gain Shield' },
      { name:'Overcharge', cost:['Metal','Metal','Metal','Metal'], damage:185, effect:'Ignores Shield' }
    ],
    weakness:'Fire', resistance:'Nature', retreatCost:4,
    rarity:'Rare', set:'Genesis', cardNumber:'127/240', artVariant:'Standard', emoji:'🤖'
  },
  {
    id:'CUB_X_025', name:'Solarburst', type:'Cubaro Creature',
    stage:'Stage 2', element:'Light', evolvesFrom:'Radiantpaw',
    hp:155, maxHp:155,
    attacks:[
      { name:'Solar Burst', cost:['Light','Light','Light'], damage:105, effect:'Heal 35 HP' },
      { name:'Nova Ray', cost:['Light','Light','Light','Light'], damage:175, effect:'Remove all status from own Cubaros' }
    ],
    weakness:'Shadow', resistance:'Storm', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'128/240', artVariant:'Standard', emoji:'☀️'
  },
  {
    id:'CUB_X_026', name:'Abyssfang', type:'Cubaro Creature',
    stage:'Stage 2', element:'Shadow', evolvesFrom:'Voidpaw',
    hp:155, maxHp:155,
    attacks:[
      { name:'Abyss Fang', cost:['Shadow','Shadow','Shadow'], damage:115, effect:'Inflict Poison' },
      { name:'Darkburst', cost:['Shadow','Shadow','Shadow','Shadow'], damage:170, effect:'Steal 20 HP from enemy' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'129/240', artVariant:'Standard', emoji:'🌑'
  },
  {
    id:'CUB_X_027', name:'Arcandrake', type:'Cubaro Creature',
    stage:'Stage 2', element:'Arcane', evolvesFrom:'Runespirit',
    hp:145, maxHp:145,
    attacks:[
      { name:'Arcane Dragon', cost:['Arcane','Arcane','Arcane'], damage:115, effect:'Draw 2 cards' },
      { name:'Mana Surge', cost:['Arcane','Arcane','Arcane','Arcane'], damage:175, effect:'Draw 3 cards' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:2,
    rarity:'Rare', set:'Genesis', cardNumber:'130/240', artVariant:'Standard', emoji:'💜'
  },

  // ════════════════════════════════
  // ADDITIONAL EX CARDS
  // ════════════════════════════════
  {
    id:'CUB_EX_X001', name:'Glaciaking EX', type:'Cubaro Creature',
    stage:'Base', element:'Water', evolvesFrom:null,
    hp:210, maxHp:210,
    attacks:[
      { name:'Glacial Strike', cost:['Water','Water'], damage:100, effect:'Inflict Freeze' },
      { name:'Absolute Blizzard', cost:['Water','Water','Water'], damage:200, effect:'Freeze all enemies' }
    ],
    weakness:'Storm', resistance:'Fire', retreatCost:3,
    rarity:'Legendary', set:'Genesis', cardNumber:'131/240',
    artVariant:'EX', emoji:'🧊', isEX:true
  },
  {
    id:'CUB_EX_X002', name:'Pyrodrake EX', type:'Cubaro Creature',
    stage:'Base', element:'Fire', evolvesFrom:null,
    hp:220, maxHp:220,
    attacks:[
      { name:'Dragon Inferno', cost:['Fire','Fire'], damage:110, effect:'Inflict Burn on all enemies' },
      { name:'Cataclysm Fire', cost:['Fire','Fire','Fire'], damage:210, effect:'Discard 2 Fire energy' }
    ],
    weakness:'Water', resistance:'Nature', retreatCost:3,
    rarity:'Legendary', set:'Genesis', cardNumber:'132/240',
    artVariant:'EX', emoji:'🐉', isEX:true
  },
  {
    id:'CUB_EX_X003', name:'Voidlord EX', type:'Cubaro Creature',
    stage:'Base', element:'Shadow', evolvesFrom:null,
    hp:220, maxHp:220,
    attacks:[
      { name:'Void Annihilation', cost:['Shadow','Shadow'], damage:110, effect:'Inflict Poison and Freeze' },
      { name:'Oblivion', cost:['Shadow','Shadow','Shadow'], damage:210, effect:'Enemy discards 1 card' }
    ],
    weakness:'Light', resistance:'Arcane', retreatCost:3,
    rarity:'Legendary', set:'Genesis', cardNumber:'133/240',
    artVariant:'EX', emoji:'👁️', isEX:true
  },
  {
    id:'CUB_EX_X004', name:'Crystalhorn EX', type:'Cubaro Creature',
    stage:'Base', element:'Arcane', evolvesFrom:null,
    hp:200, maxHp:200,
    attacks:[
      { name:'Crystal Nova', cost:['Arcane','Arcane'], damage:100, effect:'Draw 3 cards' },
      { name:'Prism Cannon', cost:['Arcane','Arcane','Arcane'], damage:200, effect:'Deals weakness damage regardless of type' }
    ],
    weakness:'Shadow', resistance:'Light', retreatCost:2,
    rarity:'Legendary', set:'Genesis', cardNumber:'134/240',
    artVariant:'EX', emoji:'💎', isEX:true
  },
  {
    id:'CUB_EX_X005', name:'Stormwing EX', type:'Cubaro Creature',
    stage:'Base', element:'Storm', evolvesFrom:null,
    hp:200, maxHp:200,
    attacks:[
      { name:'Hurricane Dive', cost:['Storm','Storm'], damage:100, effect:'Inflict Stun on all enemies' },
      { name:'Apex Storm', cost:['Storm','Storm','Storm'], damage:200, effect:'Damage all bench 30' }
    ],
    weakness:'Earth', resistance:'Metal', retreatCost:2,
    rarity:'Legendary', set:'Genesis', cardNumber:'135/240',
    artVariant:'EX', emoji:'🦅', isEX:true
  },

  // ════════════════════════════════
  // FINAL EXTRA COMMONS/UNCOMMONS
  // ════════════════════════════════
  { id:'CUB_F_001', name:'Ashkit',     type:'Cubaro Creature', stage:'Base', element:'Fire',   evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Ash Scratch',cost:['Fire'],damage:20,effect:''}],   weakness:'Water', resistance:'Nature', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'136/240', artVariant:'Standard', emoji:'🐱' },
  { id:'CUB_F_002', name:'Dewdrop',    type:'Cubaro Creature', stage:'Base', element:'Water',  evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Dew Drop',cost:['Water'],damage:15,effect:'Heal 10 HP'}], weakness:'Storm', resistance:'Fire', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'137/240', artVariant:'Standard', emoji:'💦' },
  { id:'CUB_F_003', name:'Fernpup',    type:'Cubaro Creature', stage:'Base', element:'Nature', evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Fern Slap',cost:['Nature'],damage:20,effect:''}],   weakness:'Fire', resistance:'Earth', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'138/240', artVariant:'Standard', emoji:'🐾' },
  { id:'CUB_F_004', name:'Mudpaw',     type:'Cubaro Creature', stage:'Base', element:'Earth',  evolvesFrom:null, hp:70, maxHp:70, attacks:[{name:'Mud Throw',cost:['Earth'],damage:25,effect:''}],    weakness:'Water', resistance:'Storm', retreatCost:2, rarity:'Common', set:'Genesis', cardNumber:'139/240', artVariant:'Standard', emoji:'🐻' },
  { id:'CUB_F_005', name:'Zapplet',    type:'Cubaro Creature', stage:'Base', element:'Storm',  evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Tiny Zap',cost:['Storm'],damage:20,effect:''}],     weakness:'Earth', resistance:'Metal', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'140/240', artVariant:'Standard', emoji:'🐭' },
  { id:'CUB_F_006', name:'Ironkit',    type:'Cubaro Creature', stage:'Base', element:'Metal',  evolvesFrom:null, hp:70, maxHp:70, attacks:[{name:'Iron Tap',cost:['Metal'],damage:25,effect:''}],     weakness:'Fire', resistance:'Nature', retreatCost:2, rarity:'Common', set:'Genesis', cardNumber:'141/240', artVariant:'Standard', emoji:'🐹' },
  { id:'CUB_F_007', name:'Gleamkit',   type:'Cubaro Creature', stage:'Base', element:'Light',  evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Gleam',cost:['Light'],damage:15,effect:'Heal 10 HP'}], weakness:'Shadow', resistance:'Storm', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'142/240', artVariant:'Standard', emoji:'🐣' },
  { id:'CUB_F_008', name:'Dimkit',     type:'Cubaro Creature', stage:'Base', element:'Shadow', evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Dim Strike',cost:['Shadow'],damage:20,effect:''}],  weakness:'Light', resistance:'Arcane', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'143/240', artVariant:'Standard', emoji:'🦉' },
  { id:'CUB_F_009', name:'Inkpup',     type:'Cubaro Creature', stage:'Base', element:'Arcane', evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Ink Blast',cost:['Arcane'],damage:20,effect:'Draw 1 card'}], weakness:'Shadow', resistance:'Light', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'144/240', artVariant:'Standard', emoji:'🦑' },
  { id:'CUB_F_010', name:'Lavacub',    type:'Cubaro Creature', stage:'Base', element:'Fire',   evolvesFrom:null, hp:70, maxHp:70, attacks:[{name:'Lava Drop',cost:['Fire'],damage:25,effect:'5% Burn'}], weakness:'Water', resistance:'Nature', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'145/240', artVariant:'Standard', emoji:'🦊' },
  { id:'CUB_F_011', name:'Foamcub',    type:'Cubaro Creature', stage:'Base', element:'Water',  evolvesFrom:null, hp:70, maxHp:70, attacks:[{name:'Foam Spray',cost:['Water'],damage:25,effect:''}],   weakness:'Storm', resistance:'Fire', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'146/240', artVariant:'Standard', emoji:'🐰' },
  { id:'CUB_F_012', name:'Twigling',   type:'Cubaro Creature', stage:'Base', element:'Nature', evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Twig Poke',cost:['Nature'],damage:20,effect:''}],   weakness:'Fire', resistance:'Earth', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'147/240', artVariant:'Standard', emoji:'🐿️' },
  { id:'CUB_F_013', name:'Gravelcub',  type:'Cubaro Creature', stage:'Base', element:'Earth',  evolvesFrom:null, hp:70, maxHp:70, attacks:[{name:'Gravel Toss',cost:['Earth'],damage:25,effect:''}],  weakness:'Water', resistance:'Storm', retreatCost:2, rarity:'Common', set:'Genesis', cardNumber:'148/240', artVariant:'Standard', emoji:'🦔' },
  { id:'CUB_F_014', name:'Cracklepup', type:'Cubaro Creature', stage:'Base', element:'Storm',  evolvesFrom:null, hp:60, maxHp:60, attacks:[{name:'Crackle',cost:['Storm'],damage:20,effect:''}],      weakness:'Earth', resistance:'Metal', retreatCost:1, rarity:'Common', set:'Genesis', cardNumber:'149/240', artVariant:'Standard', emoji:'🐇' },
  { id:'CUB_F_015', name:'Boltback',   type:'Cubaro Creature', stage:'Base', element:'Storm',  evolvesFrom:null, hp:70, maxHp:70, attacks:[{name:'Bolt Back',cost:['Storm'],damage:30,effect:''}],    weakness:'Earth', resistance:'Metal', retreatCost:1, rarity:'Uncommon', set:'Genesis', cardNumber:'150/240', artVariant:'Standard', emoji:'🐆' },

]; // END ALL_CARDS

// ── HELPER FUNCTIONS ─────────────────────────────────────────────────

function getCardById(id) {
  return ALL_CARDS.find(c => c.id === id) || null;
}

function getCardsByElement(element) {
  return ALL_CARDS.filter(c => c.element === element);
}

function getCardsByType(type) {
  return ALL_CARDS.filter(c => c.type === type);
}

function getCardsByRarity(rarity) {
  return ALL_CARDS.filter(c => c.rarity === rarity);
}

function getCardsByStage(stage) {
  return ALL_CARDS.filter(c => c.stage === stage);
}

function getCreatureCards() {
  return ALL_CARDS.filter(c => c.type === 'Cubaro Creature');
}

function getBaseCreatures() {
  return ALL_CARDS.filter(c => c.type === 'Cubaro Creature' && c.stage === 'Base');
}

function getEvolutions(baseName) {
  return ALL_CARDS.filter(c => c.evolvesFrom === baseName);
}

function getElementEmoji(element) {
  return ELEMENT_EMOJI[element] || '❓';
}

function getElementClass(element) {
  return ELEMENT_CLASS[element] || '';
}

function getRarityColor(rarity) {
  return RARITY_COLORS[rarity] || '#aaa';
}

function getRarityClass(rarity) {
  const map = {
    'Common':'', 'Uncommon':'', 'Rare':'rr',
    'Epic':'re', 'Legendary':'rl',
    'Full Art':'rfa', 'Gold':'rgo', 'Celestial':'rce'
  };
  return map[rarity] || '';
}

function rollRarity() {
  const r = Math.random();
  let cumulative = 0;
  for (const [rarity, rate] of Object.entries(DROP_RATES)) {
    cumulative += rate;
    if (r < cumulative) return rarity;
  }
  return 'Common';
}

function drawPackCards(count = 5, elementFilter = null) {
  const pool = elementFilter
    ? ALL_CARDS.filter(c => c.element === elementFilter || c.type !== 'Cubaro Creature')
    : ALL_CARDS;

  const drawn = [];
  for (let i = 0; i < count; i++) {
    const rarity = rollRarity();
    const candidates = pool.filter(c => c.rarity === rarity);
    if (candidates.length === 0) {
      drawn.push(pool[Math.floor(Math.random() * pool.length)]);
    } else {
      drawn.push(candidates[Math.floor(Math.random() * candidates.length)]);
    }
  }
  // Guarantee at least 1 creature
  const hasCreature = drawn.some(c => c.type === 'Cubaro Creature');
  if (!hasCreature) {
    const creatures = pool.filter(c => c.type === 'Cubaro Creature' && c.rarity === 'Common');
    if (creatures.length > 0) {
      drawn[0] = creatures[Math.floor(Math.random() * creatures.length)];
    }
  }
  return drawn;
}

function buildStarterDeck(element = 'Fire') {
  const deck = [];
  const bases = ALL_CARDS.filter(c =>
    c.type === 'Cubaro Creature' && c.stage === 'Base' && c.element === element
  ).slice(0, 2);
  bases.forEach(b => { deck.push(b.id); deck.push(b.id); });

  const stage1 = ALL_CARDS.filter(c =>
    c.type === 'Cubaro Creature' && c.stage === 'Stage 1' && c.element === element
  ).slice(0, 1);
  stage1.forEach(s => { deck.push(s.id); deck.push(s.id); });

  const energyId = `ENGY_${element.toUpperCase()}`;
  for (let i = 0; i < 6; i++) deck.push(energyId);

  const items = ALL_CARDS.filter(c => c.type === 'Item').slice(0, 3);
  items.forEach(it => { deck.push(it.id); deck.push(it.id); });

  const supports = ALL_CARDS.filter(c => c.type === 'Support').slice(0, 2);
  supports.forEach(s => { deck.push(s.id); deck.push(s.id); });

  while (deck.length < 20) {
    const wildcard = ALL_CARDS.find(c => c.id === 'NRGY_001');
    if (wildcard) deck.push(wildcard.id);
    else break;
  }

  return deck.slice(0, 20);
}

function validateDeck(deckCardIds) {
  const warnings = [];
  const errors   = [];

  if (deckCardIds.length !== 20) {
    errors.push(`Deck must have exactly 20 cards (currently ${deckCardIds.length})`);
  }

  const counts = {};
  deckCardIds.forEach(id => { counts[id] = (counts[id] || 0) + 1; });
  for (const [id, count] of Object.entries(counts)) {
    if (count > 2) {
      const card = getCardById(id);
      errors.push(`Max 2 copies of "${card ? card.name : id}" (have ${count})`);
    }
  }

  const cards = deckCardIds.map(id => getCardById(id)).filter(Boolean);
  const bases = cards.filter(c => c.type === 'Cubaro Creature' && c.stage === 'Base');
  if (bases.length === 0) errors.push('Your deck needs at least one Base Cubaro.');

  const creatures = cards.filter(c => c.type === 'Cubaro Creature');
  if (creatures.length < 4) warnings.push('Your deck has very few Cubaro Creatures (recommended: 6+).');

  const energies = cards.filter(c => c.type === 'Special Energy');
  if (energies.length < 4) warnings.push('Your deck has too few Energy cards (recommended: 4–8).');
  if (energies.length > 10) warnings.push('Your deck has a lot of Energy cards.');

  const stage2 = cards.filter(c => c.stage === 'Stage 2');
  const stage1 = cards.filter(c => c.stage === 'Stage 1');
  if (stage2.length > 0 && stage1.length === 0) {
    warnings.push('You have Stage 2 Cubaros but no Stage 1 cards!');
  }

  const supports = cards.filter(c => c.type === 'Support');
  if (supports.length > 6) warnings.push('Many Support cards — remember only 1 per turn.');

  if (errors.length === 0 && warnings.length === 0) {
    warnings.push('✅ Your deck is valid and ready for battle!');
  }

  return { valid: errors.length === 0, errors, warnings };
}

function getAIDeck(difficulty = 'normal') {
  if (difficulty === 'boss') {
    return [
      'CUB_FIRE_EX_001','CUB_FIRE_EX_001',
      'CUB_WATER_EX_001','CUB_STORM_EX_001',
      'CUB_ASC_001','CUB_ASC_003',
      'ENGY_FIRE','ENGY_FIRE','ENGY_FIRE','ENGY_WATER',
      'ENGY_STORM','ENGY_STORM',
      'SUP_001','SUP_002','SUP_005','SUP_009',
      'ITEM_011','ITEM_012','NRGY_001','NRGY_005'
    ];
  }
  if (difficulty === 'elite') {
    return [
      'CUB_FIRE_003','CUB_FIRE_003',
      'CUB_FIRE_002','CUB_FIRE_001',
      'CUB_ASC_003','CUB_EXTRA_002',
      'ENGY_FIRE','ENGY_FIRE','ENGY_FIRE','ENGY_FIRE',
      'ENGY_FIRE','ENGY_FIRE',
      'SUP_001','SUP_002','SUP_004',
      'ITEM_001','ITEM_005','ITEM_011',
      'NRGY_001','NRGY_007'
    ];
  }
  // normal
  return [
    'CUB_WATER_002','CUB_WATER_001','CUB_WATER_001',
    'CUB_WATER_003',
    'CUB_EXTRA_001',
    'ENGY_WATER','ENGY_WATER','ENGY_WATER','ENGY_WATER',
    'ENGY_WATER','ENGY_WATER',
    'SUP_001','SUP_004','SUP_006',
    'ITEM_001','ITEM_003','ITEM_004',
    'NRGY_001','NRGY_003','NRGY_008'
  ];
}

const PACK_DEFINITIONS = [
  { id:'cubaro',   name:'Cubaro Pack',    emoji:'📦', cost:500,  currency:'coins',    elementFilter:null,    description:'A standard pack with all types of Cubaros' },
  { id:'fire',     name:'Fire Pack',      emoji:'🔥', cost:700,  currency:'coins',    elementFilter:'Fire',  description:'Contains mostly Fire-type Cubaros and cards' },
  { id:'water',    name:'Water Pack',     emoji:'💧', cost:700,  currency:'coins',    elementFilter:'Water', description:'Contains mostly Water-type Cubaros and cards' },
  { id:'nature',   name:'Nature Pack',    emoji:'🌿', cost:700,  currency:'coins',    elementFilter:'Nature',description:'Contains mostly Nature-type Cubaros and cards' },
  { id:'storm',    name:'Storm Pack',     emoji:'⚡', cost:700,  currency:'coins',    elementFilter:'Storm', description:'Contains mostly Storm-type Cubaros and cards' },
  { id:'crystal',  name:'Crystal Pack',   emoji:'💎', cost:100,  currency:'crystals', elementFilter:null,    description:'Premium pack with higher rates for rare cards' },
  { id:'event',    name:'Event Pack',     emoji:'🎉', cost:150,  currency:'crystals', elementFilter:null,    description:'Special event pack with exclusive cards' },
  { id:'fullart',  name:'Full Art Pack',  emoji:'🖼️', cost:300,  currency:'crystals', elementFilter:null,    description:'Guaranteed Full Art, Gold or Celestial cards' },
];

const ADVENTURE_NODES = [
  { id:0,  x:50,  y:80, type:'normal',   name:'Cubaro Scout',     emoji:'👤', difficulty:'Easy',   tokens:1, rewards:{ coins:100, shards:10, xp:20 } },
  { id:1,  x:25,  y:65, type:'normal',   name:'Ember Warden',     emoji:'🔥', difficulty:'Easy',   tokens:1, rewards:{ coins:120, shards:15, xp:25 } },
  { id:2,  x:70,  y:63, type:'treasure', name:'Treasure Cave',    emoji:'💰', difficulty:'None',   tokens:0, rewards:{ coins:300, shards:50, xp:10 } },
  { id:3,  x:40,  y:50, type:'normal',   name:'Storm Raider',     emoji:'⚡', difficulty:'Normal', tokens:2, rewards:{ coins:150, shards:20, xp:35 } },
  { id:4,  x:15,  y:48, type:'healing',  name:'Crystal Spring',   emoji:'💊', difficulty:'None',   tokens:0, rewards:{ coins:50, crystals:5, xp:10 } },
  { id:5,  x:60,  y:42, type:'elite',    name:'Shadow Beast',     emoji:'🌑', difficulty:'Hard',   tokens:3, rewards:{ coins:250, shards:40, xp:60, crystals:10 } },
  { id:6,  x:35,  y:35, type:'story',    name:'Ancient Temple',   emoji:'🏛️', difficulty:'None',   tokens:0, rewards:{ coins:100, xp:15 } },
  { id:7,  x:75,  y:28, type:'normal',   name:'Arcane Guardian',  emoji:'🔮', difficulty:'Hard',   tokens:2, rewards:{ coins:200, shards:30, xp:50 } },
  { id:8,  x:20,  y:28, type:'elite',    name:'Metal Titan',      emoji:'🤖', difficulty:'Hard',   tokens:3, rewards:{ coins:300, shards:50, xp:70, crystals:15 } },
  { id:9,  x:50,  y:20, type:'normal',   name:'Storm Colossus',   emoji:'🌪️', difficulty:'Hard',   tokens:2, rewards:{ coins:220, shards:35, xp:55 } },
  { id:10, x:30,  y:12, type:'elite',    name:'Crystal Titan',    emoji:'💎', difficulty:'Expert', tokens:4, rewards:{ coins:400, shards:80, xp:100, crystals:20 } },
  { id:11, x:65,  y:8,  type:'boss',     name:'Void Emperor',     emoji:'👁️', difficulty:'Boss',   tokens:5, rewards:{ coins:600, shards:120, xp:150, crystals:30, pack:'crystal' } },
];

const NODE_CONNECTIONS = [
  [0,1],[0,2],[0,3],[1,4],[2,3],[3,5],[3,6],[5,7],[6,8],[7,9],[8,9],[9,10],[9,11],[10,11]
];

const DAILY_REWARDS = [
  { day:1, emoji:'🪙', label:'200 Coins',         reward:{ coins:200 } },
  { day:2, emoji:'🔷', label:'50 Card Shards',     reward:{ shards:50 } },
  { day:3, emoji:'⏳', label:'2 Time Tokens',      reward:{ tokens:2 } },
  { day:4, emoji:'🪙', label:'300 Coins',          reward:{ coins:300 } },
  { day:5, emoji:'💎', label:'5 Cubaro Crystals',  reward:{ crystals:5 } },
  { day:6, emoji:'📦', label:'1 Cubaro Pack',      reward:{ pack:'cubaro' } },
  { day:7, emoji:'💎', label:'1 Crystal Pack',     reward:{ pack:'crystal' } },
];

const NPC_TRADES = [
  {
    id:'npc1',
    npc:'🔥 Ember Trader',
    offer:{ type:'card', cardId:'CUB_FIRE_002', label:'Flarepaws (Rare Fire)' },
    wants:{ type:'coins', amount:300, label:'300 Coins' },
    available:true
  },
  {
    id:'npc2',
    npc:'💧 Wave Dealer',
    offer:{ type:'card', cardId:'CUB_WATER_002', label:'Aquapaw (Water Stage 1)' },
    wants:{ type:'shards', amount:100, label:'100 Card Shards' },
    available:true
  },
  {
    id:'npc3',
    npc:'💎 Crystal Broker',
    offer:{ type:'pack', packId:'crystal', label:'Crystal Pack' },
    wants:{ type:'card', cardId:'CUB_ASC_001', label:'1 Epic Card (Solarius)' },
    available:true
  },
];

const TOURNAMENTS = [
  {
    id:'daily',
    name:'Daily Cubaro Cup',
    emoji:'🏆',
    format:'Standard',
    entryCost:{ coins:200 },
    prizePool:'500 Coins + 1 Pack',
    players:8,
    description:'Daily tournament open to all trainers',
    rules:'Standard deck rules apply. First to 3 VP wins each match.'
  },
  {
    id:'weekend',
    name:'Weekend Championship',
    emoji:'🥇',
    format:'Standard',
    entryCost:{ coins:500 },
    prizePool:'2000 Coins + 3 Packs + 50 Crystals',
    players:16,
    description:'Weekly championship for experienced trainers',
    rules:'Standard deck rules. Best of 3 per round.'
  },
  {
    id:'beginner',
    name:'Beginner Base Cup',
    emoji:'🌱',
    format:'Base Only',
    entryCost:{ coins:100 },
    prizePool:'300 Coins + 1 Pack',
    players:8,
    description:'Only Base stage Cubaros allowed',
    rules:'Deck may only contain Base stage Cubaros. No Stage 1 or Stage 2.'
  },
  {
    id:'element',
    name:'Element Clash Event',
    emoji:'⚡',
    format:'Single Element',
    entryCost:{ crystals:20 },
    prizePool:'1000 Coins + 2 Crystal Packs',
    players:8,
    description:'Your deck must contain only one element type',
    rules:'All Cubaros in your deck must share the same element.'
  },
  {
    id:'draft',
    name:'Draft Challenge',
    emoji:'🎴',
    format:'Draft',
    entryCost:{ crystals:30 },
    prizePool:'1500 Coins + 1 Crystal Pack + 100 Shards',
    players:8,
    description:'Draft your deck from a random pool of cards',
    rules:'Each player receives a random pool and builds a 20-card deck.'
  },
  {
    id:'sealed',
    name:'Sealed Arena',
    emoji:'🔒',
    format:'Sealed',
    entryCost:{ crystals:50 },
    prizePool:'3000 Coins + 3 Crystal Packs + 200 Shards',
    players:8,
    description:'Open 4 packs and build your deck from what you get',
    rules:'Open 4 Cubaro Packs and build a 20-card deck from those cards only.'
  },
];

const ROADMAP = [
  {
    phase:'Phase 1 — Browser Game Launch',
    done:true,
    items:['Playable web version','Local progression','Card collection','Pack opening','Deck builder','AI battles','Adventure mode','Daily rewards','Crafting system']
  },
  {
    phase:'Phase 2 — Online Accounts',
    done:false,
    items:['Real backend','Cloud save','Google login','Facebook login','Email accounts','Cross-device progress']
  },
  {
    phase:'Phase 3 — Online PvP',
    done:false,
    items:['Matchmaking','Ranked ladder','Friend battles','Reconnect system','Anti-cheat']
  },
  {
    phase:'Phase 4 — Full Economy',
    done:false,
    items:['Real in-app purchases','Rewarded ads network','Server-side currency validation','Premium currency security']
  },
  {
    phase:'Phase 5 — Tournaments & Trading',
    done:false,
    items:['Real player trading','Anti-duplication protection','Automated tournaments','Live event formats']
  },
  {
    phase:'Phase 6 — Mobile App Release',
    done:false,
    items:['Android release','PC build','Crossplay support','iOS-ready structure']
  },
];

const LEGAL_PAGES = {
  privacy: {
    title:'Privacy Policy',
    content:`
      <h2>Privacy Policy</h2>
      <p>Last updated: 2025. Cubaro Cards is operated by cubarocards.com.</p>
      <h3>Data We Collect</h3>
      <p>In this browser version, all game data is stored locally on your device using localStorage. We do not transmit personal data to any server.</p>
      <ul>
        <li>Game progress (cards, decks, currency) — stored locally only</li>
        <li>Settings and preferences — stored locally only</li>
        <li>No account data is collected in this version</li>
      </ul>
      <h3>Future Versions</h3>
      <p>When online accounts are introduced, we will collect email addresses and usernames. A full privacy policy update will be published at that time.</p>
      <h3>Cookies</h3>
      <p>This version does not use tracking cookies. localStorage is used for game state only.</p>
      <h3>Children</h3>
      <p>Cubaro Cards is designed to be family-friendly. We do not knowingly collect data from children under 13.</p>
      <h3>Contact</h3>
      <p>For privacy questions: privacy@cubarocards.com</p>
    `
  },
  terms: {
    title:'Terms of Service',
    content:`
      <h2>Terms of Service</h2>
      <p>By playing Cubaro Cards, you agree to these terms.</p>
      <h3>Original IP</h3>
      <p>Cubaro Cards is an original intellectual property. All Cubaros, card names, game mechanics and designs are original and owned by cubarocards.com. No affiliation with any existing trading card game brands.</p>
      <h3>Virtual Currency</h3>
      <ul>
        <li>Coins, Cubaro Crystals, Time Tokens and Card Shards are virtual in-game currencies with no real-world value</li>
        <li>Real-money purchases are not active in this browser version</li>
        <li>No real-money trading between players is permitted</li>
        <li>Virtual items cannot be exchanged for real money</li>
      </ul>
      <h3>Fair Play</h3>
      <p>Cheating, exploiting bugs or manipulating game data is prohibited and may result in account suspension in future versions.</p>
      <h3>Content</h3>
      <p>Cubaro Cards content is rated suitable for all ages. We reserve the right to update game content at any time.</p>
      <h3>Disclaimer</h3>
      <p>This game is provided as-is. We make no guarantees regarding uptime or specific card drops from packs.</p>
      <h3>Contact</h3>
      <p>legal@cubarocards.com</p>
    `
  },
  cookies: {
    title:'Cookie Policy',
    content:`
      <h2>Cookie Policy</h2>
      <p>Cubaro Cards uses localStorage (not traditional cookies) to save your game progress locally on your device.</p>
      <h3>What We Store Locally</h3>
      <ul>
        <li>Player profile and username</li>
        <li>Card collection</li>
        <li>Deck configurations</li>
        <li>Currency balances</li>
        <li>Daily reward status</li>
        <li>Adventure progress</li>
        <li>Game settings</li>
      </ul>
      <h3>Third-Party Cookies</h3>
      <p>This version does not use any third-party cookies or tracking scripts.</p>
      <h3>Clearing Data</h3>
      <p>You can reset all local data in Settings → Reset Local Progress. Clearing your browser cache will also remove all game data.</p>
    `
  },
  ads: {
    title:'Ads & Rewarded Ads',
    content:`
      <h2>Ads & Rewarded Ads Info</h2>
      <h3>Current Version</h3>
      <p>The rewarded ads in this browser version are simulated. No real advertisements are shown. Clicking "Watch Ad" triggers a 5-second countdown and awards Cubaro Crystals.</p>
      <h3>Future Ad Integration</h3>
      <ul>
        <li>Rewarded ads will always be optional and voluntary</li>
        <li>No ads will appear during battles</li>
        <li>Maximum 3 rewarded ads per day</li>
        <li>Ad networks will be connected in a future version</li>
        <li>Child-safe ad categories will be enforced</li>
      </ul>
      <h3>No Forced Advertising</h3>
      <p>Cubaro Cards will never show forced interstitial ads or ads that interrupt gameplay.</p>
    `
  },
  drops: {
    title:'Drop Rates Info',
    content:`
      <h2>Pack Drop Rates</h2>
      <p>Cubaro Cards is committed to full transparency on pack odds.</p>
      <h3>Standard Drop Rates (per card slot)</h3>
      <ul>
        <li>Common: 60%</li>
        <li>Uncommon: 25%</li>
        <li>Rare: 10%</li>
        <li>Epic: 3.5%</li>
        <li>Legendary: 1%</li>
        <li>Full Art: 0.3%</li>
        <li>Gold: 0.1%</li>
        <li>Celestial: 0.1%</li>
      </ul>
      <h3>Important Notes</h3>
      <ul>
        <li>Each pack contains 5 cards drawn independently</li>
        <li>At least 1 Cubaro Creature is guaranteed per pack</li>
        <li>Crystal Packs have improved rare+ rates</li>
        <li>Full Art Packs guarantee at least 1 Full Art, Gold or Celestial card</li>
        <li>There is no pity system in this version — all draws are independent</li>
        <li>Opening a pack does not guarantee any specific card</li>
      </ul>
      <h3>Crafting Alternative</h3>
      <p>All cards can be crafted using Card Shards, allowing you to obtain specific cards without relying on pack luck.</p>
    `
  }
};

// ── SETTINGS DEFAULTS ─────────────────────────────────────────────────
const DEFAULT_SETTINGS = {
  language: 'English',
  music: true,
  sfx: true,
  animationQuality: 'High',
};

// ── STARTER REWARDS ───────────────────────────────────────────────────
const STARTER_REWARDS = {
  coins: 1000,
  crystals: 50,
  tokens: 10,
  shards: 100,
  packs: ['cubaro','cubaro','cubaro'],
  deck: buildStarterDeck('Fire'),
};

// ── FEATURE CARDS FOR HOME PAGE ───────────────────────────────────────
const HOME_FEATURES = [
  { icon:'📦', title:'Open Packs',      desc:'Discover new Cubaros',         page:'packs' },
  { icon:'⚔️', title:'Battle AI',       desc:'Fight CPU opponents',           page:'battle' },
  { icon:'🗺️', title:'Adventure',       desc:'Explore Cubaro World Map',      page:'adventure' },
  { icon:'🃏', title:'Build Deck',      desc:'Create your strategy',          page:'deck' },
  { icon:'📚', title:'Collection',      desc:'View all your cards',           page:'collection' },
  { icon:'⚗️', title:'Crafting',        desc:'Craft cards with Shards',       page:'crafting' },
  { icon:'🏆', title:'Tournaments',     desc:'Compete for prizes',            page:'tournament' },
  { icon:'🎁', title:'Daily Rewards',   desc:'Claim your daily bonus',        page:'daily' },
  { icon:'🔄', title:'Trading',         desc:'NPC mock trades',               page:'trading' },
  { icon:'🛒', title:'Store',           desc:'Spend your currency',           page:'store' },
];

console.log(`✅ Cubaro Cards — ${ALL_CARDS.length} cards loaded`);

