'use strict';

// package references
const unirest = require('unirest');

// api details
const baseApiUrl = 'http://localhost:8000/api';

class NoteService {

    addNote({ title, content, tags }) {
        return new Promise((resolve, reject) => {
            unirest
                .post(`${baseApiUrl}/notes`)
                .headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                .send({
                    'note': {
                        'title': title,
                        'content': content,
                        'tags': tags
                    }
                })
                .end(response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    } else {
                        resolve(response.body);
                        return;
                    }
                });
        });
    }


    findNoteById(id) {
        return new Promise((resolve, reject) => {
            unirest
                .get(`${baseApiUrl}/notes/${id}`)
                .headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                .end(response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    } else {
                        resolve(response.body);
                        return;
                    }
                });
        });
    }


    findNotesByTag(tag) {
        return new Promise((resolve, reject) => {
            unirest
                .get(`${baseApiUrl}/notes?tag=${tag}`)
                .headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                .end(response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    } else {
                        resolve(response.body);
                        return;
                    }
                });
        });
    }


    findNotesByTitle(title) {
        return new Promise((resolve, reject) => {
            unirest
                .get(`${baseApiUrl}/notes?title=${title}`)
                .headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                .end(response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    } else {
                        resolve(response.body);
                        return;
                    }
                });
        });
    }


    listNotes() {
        return new Promise((resolve, reject) => {
            unirest
                .get(`${baseApiUrl}/notes`)
                .headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                .end(response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    } else {
                        resolve(response.body);
                        return;
                    }
                });
        });
    }


    removeNote(id) {
        return new Promise((resolve, reject) => {
            unirest
                .delete(`${baseApiUrl}/notes/${id}`)
                .headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                .end(response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    } else {
                        resolve(response.body);
                        return;
                    }
                });
        });
    }


    tagNote(id, tags) {
        return new Promise((resolve, reject) => {
            unirest
                .patch(`${baseApiUrl}/notes/${id}`)
                .headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                .send({ tags: tags })
                .end(response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    } else {
                        resolve(response.body);
                        return;
                    }
                });
        });
    }


    updateNote({ id, title, content, tags }) {
        return new Promise((resolve, reject) => {
            unirest
                .post(`${baseApiUrl}/notes/${id}`)
                .headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
                .send({
                    'note': {
                        'title': title,
                        'content': content,
                        'tags': tags
                    }
                })
                .end(response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    } else {
                        resolve(response.body);
                        return;
                    }
                });
        });
    }
}

module.exports = NoteService;