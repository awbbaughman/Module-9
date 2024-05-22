const apiSchema = new Schema({
    url: { type: String, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    region: { type: String, trim: true, required: true},
    
    coatOfArms: { type: String },
    words: { type: String},
    titles: { type: Array },
    seats: { type: Array },
    currentLord: { type: String },
    heir: { type: String },
    overlord: { type: String },
    founded: { type: String },
    founder: { type: String },
    diedOut: { type: String },
    ancestralWeapons: { type: Array },
    cadetBranches: { type: Array },
    swornMembers: { type: Array }
});
module.exports = mongoose.model("api", apiSchema);