import mongoose from 'mongoose';
import Note from './note';
const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true });

const laneSchema = new Schema({
    name: { type: 'String', required: true },
    notes: [{ type: Schema.ObjectId, ref: 'Note', required: true}],
    id: {type: 'String', required: true, unique: true}
});
 
// it's a hook which starts when the find method is called 
function populateNotes(next){
    this.populate('notes');
    next();
};





laneSchema.pre('find', populateNotes);
//laneSchema.pre('remove', removeLaneNotes);


export default mongoose.model('Lane', laneSchema);
