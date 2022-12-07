import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {Theme} from '../Theme';
import {CanvasStage, CanvasWrapper} from './styles';
import {Executor} from '../Algorithms/codes';
import {deviceRatio, AnimationPlayer, Size, AudioPlayer} from './functions';

interface CanvasProps {
    theme: Theme;
    speed: number;
    shuffle: number;
    audioIsEnabled: boolean;
    executor: Executor;
}

const Canvas: FunctionComponent<CanvasProps> = ({theme, speed, executor, shuffle, audioIsEnabled}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [size, setSize] = useState<Size>([0, 0]);
    const [animationPlayer, setAnimationPlayer] = useState<AnimationPlayer>();
    const [autoPlayer, setAutoPlayer] = useState<AudioPlayer>();

    useEffect(() => {
        if (canvasRef.current) {
            const {width, height} = canvasRef.current.getBoundingClientRect();
            setSize([width * deviceRatio, height * deviceRatio]);
            const context = canvasRef.current.getContext('2d');
            if (context) {
                const _animationPlayer = new AnimationPlayer(context);
                const _audioPlayer = new AudioPlayer();

                _animationPlayer.size = [width * deviceRatio, height * deviceRatio];
                _animationPlayer.audioPlayer = _audioPlayer;

                setAnimationPlayer(_animationPlayer);
                setAutoPlayer(_audioPlayer);
            }
        }
    }, [canvasRef]);

    useEffect(() => {
        if (animationPlayer) {
            animationPlayer.theme = theme;
        }
    }, [animationPlayer, theme]);

    useEffect(() => {
        if (animationPlayer) {
            animationPlayer.executor = executor;
        }
    }, [animationPlayer, executor]);

    useEffect(() => {
        if (animationPlayer) {
            animationPlayer.speed = speed;
        }
    }, [animationPlayer, speed]);

    useEffect(() => {
        if (animationPlayer) {
            animationPlayer.replay();
        }
    }, [animationPlayer, shuffle]);
    
    useEffect(() => {
        if (autoPlayer) {
            autoPlayer.isEnabled = audioIsEnabled;
        }
    }, [autoPlayer, audioIsEnabled]);

    return <CanvasWrapper>
        <CanvasStage ref={canvasRef} width={size[0]} height={size[1]}/>
    </CanvasWrapper>;
};

export default Canvas;
