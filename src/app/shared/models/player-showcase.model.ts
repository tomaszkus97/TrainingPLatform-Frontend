import { PlayerPersonalData } from './player-personal-data.model';
import { Level } from './level.model';
import { Group } from './group';
import { LevelName } from '../enums/level.enum';

export class PlayerShowcaseModel{
    personalData: PlayerPersonalData;
    photo: string;
    currentLevel:{
        levelName: LevelName,
        pointsToAdvance: number
    };
    currentPoints: number;
    finishedChallenges: string[];
    assignedGroups: {
        day: string;
        hour: string;
        level: LevelName
    }[];
}