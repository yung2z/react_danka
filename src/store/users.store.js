import { create } from 'zustand'

export const useUsersStore = create((set) => ({
  users: [],
  getAllUsers: ()=>{
    set({users: []})
  }
}))