const LOCAL_STORAGE_KEY = 'notes';

class StorageManager extends EventTarget {
    notes = {};

    constructor() {
        super();
        this.loadData();
    }

    loadData(){
        const storedString = localStorage.getItem(LOCAL_STORAGE_KEY);

        this.notes = JSON.parse(storedString) || {};
    }

    updateNote(dateId, note) {
        this.notes[dateId] = note;
        this.saveNotes();
        this.dispatchEvent(new CustomEvent('update', {detail: this.notes}));
    }

    saveNotes() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.notes))
    }
}

export const storageManager = new StorageManager();