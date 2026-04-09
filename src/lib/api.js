// ===== API LAYER =====
// Mock API functions — replace with real backend calls later

import {
  careers, subjects, mockUsers, studyGroups, groupMembers,
  groupMessages, groupEvents, directMessages, userSubjects
} from './mockData';

const delay = (ms = 400) => new Promise(r => setTimeout(r, ms));

// ===== CAREERS =====
export async function getCareers() {
  await delay();
  return [...careers];
}

// ===== SUBJECTS =====
export async function getSubjects(careerId = null) {
  await delay();
  if (careerId) return subjects.filter(s => s.career_id === careerId);
  return [...subjects];
}

export async function getSubjectsByYear(careerId, year) {
  await delay(200);
  return subjects.filter(s => s.career_id === careerId && s.year === year);
}

// ===== USERS =====
export async function getUsers() {
  await delay();
  return [...mockUsers];
}

export async function getUserById(userId) {
  await delay(200);
  return mockUsers.find(u => u.id === userId) || null;
}

export async function getMatchingUsers(filters = {}) {
  await delay(500);
  let result = [...mockUsers];
  if (filters.subject) {
    result = result.filter(u => u.subjects?.includes(filters.subject));
  }
  if (filters.intention) {
    result = result.filter(u => u.intention === filters.intention);
  }
  return result;
}

// ===== USER SUBJECTS =====
export async function getUserSubjects(userId) {
  await delay();
  return userSubjects.filter(us => us.user_id === userId);
}

export async function addUserSubject(data) {
  await delay(200);
  const newUS = { id: 'us-' + Date.now(), ...data };
  userSubjects.push(newUS);
  return newUS;
}

export async function updateUserSubject(id, updates) {
  await delay(200);
  const idx = userSubjects.findIndex(us => us.id === id);
  if (idx !== -1) {
    userSubjects[idx] = { ...userSubjects[idx], ...updates };
    return userSubjects[idx];
  }
  return null;
}

export async function deleteUserSubject(id) {
  await delay(200);
  const idx = userSubjects.findIndex(us => us.id === id);
  if (idx !== -1) userSubjects.splice(idx, 1);
  return true;
}

// ===== STUDY GROUPS =====
export async function getStudyGroups() {
  await delay();
  return [...studyGroups];
}

export async function getGroupById(groupId) {
  await delay(200);
  return studyGroups.find(g => g.id === groupId) || null;
}

export async function createGroup(data) {
  await delay(300);
  const newGroup = {
    id: 'group-' + Date.now(),
    member_count: 1,
    max_members: data.max_members || 6,
    ...data,
  };
  studyGroups.push(newGroup);
  return newGroup;
}

export async function joinGroup(groupId, userId, userName) {
  await delay(200);
  const group = studyGroups.find(g => g.id === groupId);
  if (group) group.member_count++;
  const newMember = {
    id: 'gm-' + Date.now(),
    group_id: groupId,
    user_id: userId,
    user_name: userName,
  };
  groupMembers.push(newMember);
  return newMember;
}

// ===== GROUP MEMBERS =====
export async function getGroupMembers(groupId) {
  await delay(200);
  return groupMembers.filter(gm => gm.group_id === groupId);
}

export async function isUserInGroup(groupId, userId) {
  await delay(100);
  return groupMembers.some(gm => gm.group_id === groupId && gm.user_id === userId);
}

// ===== GROUP MESSAGES =====
export async function getGroupMessages(groupId) {
  await delay(200);
  return groupMessages
    .filter(m => m.group_id === groupId)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
}

export async function sendGroupMessage(data) {
  await delay(100);
  const newMsg = {
    id: 'msg-' + Date.now(),
    created_at: new Date().toISOString(),
    ...data,
  };
  groupMessages.push(newMsg);
  return newMsg;
}

// ===== GROUP EVENTS =====
export async function getGroupEvents(groupId) {
  await delay(200);
  if (groupId) return groupEvents.filter(e => e.group_id === groupId);
  return [...groupEvents];
}

export async function getAllUserEvents(userId) {
  await delay(300);
  const userGroupIds = groupMembers
    .filter(gm => gm.user_id === userId)
    .map(gm => gm.group_id);
  return groupEvents
    .filter(e => userGroupIds.includes(e.group_id))
    .sort((a, b) => new Date(a.date_time) - new Date(b.date_time));
}

export async function createGroupEvent(data) {
  await delay(200);
  const newEvt = { id: 'evt-' + Date.now(), ...data };
  groupEvents.push(newEvt);
  return newEvt;
}

// ===== DIRECT MESSAGES =====
export async function getDirectMessages(userId1, userId2) {
  await delay(200);
  return directMessages
    .filter(dm =>
      (dm.from_user_id === userId1 && dm.to_user_id === userId2) ||
      (dm.from_user_id === userId2 && dm.to_user_id === userId1)
    )
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
}

export async function sendDirectMessage(data) {
  await delay(100);
  const newDM = {
    id: 'dm-' + Date.now(),
    created_at: new Date().toISOString(),
    ...data,
  };
  directMessages.push(newDM);
  return newDM;
}

// ===== USER GROUPS =====
export async function getUserGroups(userId) {
  await delay(300);
  const userGroupIds = groupMembers
    .filter(gm => gm.user_id === userId)
    .map(gm => gm.group_id);
  return studyGroups.filter(g => userGroupIds.includes(g.id));
}
