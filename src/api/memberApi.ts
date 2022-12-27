import { MemberEntity } from "../model/member";
import Axios, { AxiosResponse } from "axios";

const githubURL = 'https://api.github.com';
const githubMembersURL = `${githubURL}/orgs/lemoncode/members`;


export const getMembersCollection = (): Promise<MemberEntity[]> => {
    const promise = new Promise<MemberEntity[]>((resolve, reject) => {
        try {
            Axios.get<MemberEntity[]>(githubMembersURL)
                .then(response => resolve(mapMemberListApiModel(response)));
        } catch (ex) {
            reject(ex);
        }
    });
    return promise;
};

const mapMemberListApiModel = ({ data }: AxiosResponse<any[]>): MemberEntity[] =>
    data.map(githubMember => ({
        id: githubMember.id,
        login: githubMember.login,
        avatar_url: githubMember.avatar_url
    }));